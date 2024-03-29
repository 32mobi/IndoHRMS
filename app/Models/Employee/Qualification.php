<?php

namespace App\Models\Employee;

use App\Casts\DateCast;
use App\Concerns\HasFilter;
use App\Concerns\HasMedia;
use App\Concerns\HasMeta;
use App\Concerns\HasUuid;
use App\Helpers\CalHelper;
use App\Models\Option;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Qualification extends Model
{
    use HasFactory, HasFilter, HasUuid, HasMeta, HasMedia, LogsActivity;

    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $table = 'employee_qualifications';

    protected $casts = [
        'start_date' => DateCast::class,
        'end_date' => DateCast::class,
        'meta' => 'array',
    ];

    public function getModelName(): string
    {
        return 'EmployeeQualification';
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    public function level(): BelongsTo
    {
        return $this->belongsTo(Option::class, 'level_id');
    }

    public function getPeriodAttribute(): string
    {
        return CalHelper::getPeriod($this->start_date->value, $this->end_date->value);
    }

    public function getDurationAttribute(): string
    {
        return CalHelper::getDuration($this->start_date->value, $this->end_date->value, 'day');
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('employee')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }
}
