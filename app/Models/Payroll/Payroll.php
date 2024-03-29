<?php

namespace App\Models\Payroll;

use App\Casts\DateCast;
use App\Casts\PriceCast;
use App\Concerns\HasDatePeriod;
use App\Concerns\HasFilter;
use App\Concerns\HasMeta;
use App\Concerns\HasUuid;
use App\Enums\Payroll\PaymentStatus;
use App\Helpers\CalHelper;
use App\Models\Employee\Employee;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Payroll extends Model
{
    use HasFactory, HasFilter, HasUuid, HasMeta, HasDatePeriod, LogsActivity;

    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $table = 'payrolls';

    protected $casts = [
        'start_date' => DateCast::class,
        'end_date' => DateCast::class,
        'total' => PriceCast::class,
        'paid' => PriceCast::class,
        'status' => PaymentStatus::class,
        'meta' => 'array',
    ];

    public function records(): HasMany
    {
        return $this->hasMany(Record::class, 'payroll_id');
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function salaryStructure(): BelongsTo
    {
        return $this->belongsTo(SalaryStructure::class, 'salary_structure_id');
    }

    public function getPeriodAttribute()
    {
        return CalHelper::getPeriod($this->start_date->value, $this->end_date->value);
    }

    public function getDurationAttribute()
    {
        return CalHelper::getDuration($this->start_date->value, $this->end_date->value, 'day');
    }

    public function scopeFindIfExists(Builder $query, string $uuid, $field = 'message')
    {
        return $query->whereUuid($uuid)
            ->with(['employee' => fn ($q) => $q->withFullRecordDetail(), 'records', 'records.payHead'])
            ->getOrFail(trans('payroll.payroll'), $field);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('payroll')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }
}
