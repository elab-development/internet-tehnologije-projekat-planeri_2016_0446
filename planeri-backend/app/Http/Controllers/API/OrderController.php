<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function getOrders()
    {
        $orders = Order::all();
        return $orders;
    }

    public function createOrder(Request $request)
    {
        $json = $request->json()->all();

        $order = Order::create([
            'user_id' => $json['user_id'],
            'price' => $json['price'],
            'status' => $json['status'],
        ]);

        return response()->json(['message' => 'Order successfully created!']);
    }
}
