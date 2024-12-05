<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planer extends Model
{
    use HasFactory;

    function planerType()
    {
        return $this->belongsTo(PlanerType::class, 'planer_type_id');
    }

    protected $fillable = [
        'planer_type_id',
        'cover',
        'cover_design',
        'page_number',
        'page_layout',
        'price',
        'size',
        'front_page',
        'dates',
        'daily_planer_design',
        'notes'
    ];
}
