<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListOfOrderItems extends Model
{
    use HasFactory;

    protected $primaryKey = ['id', 'order_id'];

    function order()
    {
        return $this->belongsTo(Order::class, 'id', 'order_id');
    }
}
