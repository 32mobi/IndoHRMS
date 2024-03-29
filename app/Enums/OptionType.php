<?php

namespace App\Enums;

use App\Concerns\HasEnum;
use Illuminate\Support\Arr;

enum OptionType: string
{
    use HasEnum;

    case TODO_LIST = 'todo_list';
    case EMPLOYMENT_STATUS = 'employment_status';
    case EMPLOYMENT_TYPE = 'employment_type';
    case QUALIFICATION_LEVEL = 'qualification_level';
    case DOCUMENT_TYPE = 'document_type';
    case PAYMENT_METHOD = 'payment_method';

    public function detail(): array
    {
        return match ($this) {
            self::TODO_LIST => [
                'type' => 'todo_list',
                'module' => 'utility',
                'sub_module' => 'todo_list',
                'permission' => 'utility:config',
                'team' => false,
            ],
            self::EMPLOYMENT_STATUS => [
                'type' => 'employment_status',
                'module' => 'employee',
                'sub_module' => 'employment_status',
                'permission' => 'employee:config',
                'team' => true,
            ],
            self::EMPLOYMENT_TYPE => [
                'type' => 'employment_type',
                'module' => 'employee',
                'sub_module' => 'employment_type',
                'permission' => 'employee:config',
                'team' => true,
            ],
            self::QUALIFICATION_LEVEL => [
                'type' => 'qualification_level',
                'module' => 'employee',
                'sub_module' => 'qualification_level',
                'permission' => 'employee:config',
                'team' => true,
            ],
            self::DOCUMENT_TYPE => [
                'type' => 'document_type',
                'module' => 'employee',
                'sub_module' => 'document_type',
                'permission' => 'employee:config',
                'team' => true,
            ],
            default => []
        };
    }

    public static function getOptions(): array
    {
        $options = [];

        foreach (self::cases() as $option) {
            $detail = $option->detail();

            $module = Arr::get($detail, 'module');
            $subModule = Arr::get($detail, 'sub_module');

            $options[] = ['label' => trans($module.'.'.$subModule.'.'.$subModule), 'value' => $option->value];
        }

        return $options;
    }
}
