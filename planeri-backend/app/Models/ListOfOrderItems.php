<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListOfOrderItems extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'planer_id',
    ];


    function order()
    {
        return $this->belongsTo(Order::class, 'id');
    }
}
