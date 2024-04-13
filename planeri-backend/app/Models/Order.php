<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'price',
        'status'
    ];

    protected $primaryKey = 'id';

    function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    function listOfOrderItems()
    {
        return $this->hasMany(ListOfOrderItems::class, 'order_id', 'id');
    }
}
