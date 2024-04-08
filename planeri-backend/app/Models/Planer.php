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
}
