<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanerLayout extends Model
{
    use HasFactory;

    function planerType()
    {
        return $this->hasOne(PlanerType::class, 'planer_type_id');
    }

    protected $fillable = [
        'name',
        'image',
        'price',
        'planer_type_id'
    ];
}
