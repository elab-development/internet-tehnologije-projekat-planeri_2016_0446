<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

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
        try {
            Order::create([
                'user_id' => $json['user_id'],
                'price' => $json['price'],
                'status' => $json['status'],
            ]);

            return response()->json(['message' => 'Order successfully created!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create order. Error: ' . $e->getMessage()], 500);
        }
    }

    public function generateBillToPdf(Request $request)
    {
        $json = $request->json()->all();
        $data = [
            'items' => $json['items'],
            'price' => $json['price']
        ];
        try {
            $pdf = PDF::loadView('pdf.bill', $data);
            return $pdf->download('bill.pdf');
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create order. Error: ' . $e->getMessage()], 500);
        }
    }
}
