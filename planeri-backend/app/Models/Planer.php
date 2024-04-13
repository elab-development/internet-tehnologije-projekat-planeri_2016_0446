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
        "planer_type_id",
        "cover",
        "page_number",
        "has_calendar",
        "page_layout",
        "price",
        "size",
        "cover_design",
        "front_page",
        "dates",
        "daily_planer_design",
        "notes",
        "package_layout"
    ];
}
