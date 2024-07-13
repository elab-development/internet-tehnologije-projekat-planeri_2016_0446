<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ListOfOrderItems;
use App\Models\Order;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    public function getOrders()
    {
        $orders = Order::with("user")->get();
        return $orders;
    }

    public function getOrdersForUser(string $id)
    {
        $orders = Order::with("user")->where('user_id', '=', (int)$id)->get();
        return $orders;
    }

    public function getOrderItems(string $id)
    {
        $orderItems = ListOfOrderItems::with(['planer.planerType', 'order'])->where('order_id', '=', (int)$id)->get();
        return $orderItems;
    }

    public function createOrder(Request $request)
    {
        $json = $request->json()->all();
        Log::info('eadsaf', $json);
        try {
            $order = Order::create([
                'user_id' => $json['user_id'],
                'price' => $json['price'],
                'status' => $json['status'],
            ]);

            $orderId = $order->id;
            $listOfItems = $json['orderItems'];
            Log::info('itemcici', $listOfItems);
            foreach ($json['orderItems'] as $item) {
                Log::info('itemce', $item);

                $this->addItemToOrderList($orderId, $item['productId']);
            }

            return response()->json(['message' => 'Order successfully created!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create order. Error: ' . $e->getMessage()], 500);
        }
    }

    public function addItemToOrderList(int $orderId, int $planer_id)
    {
        try {
            ListOfOrderItems::create([
                'order_id' => $orderId,
                'planer_id' => $planer_id
            ]);

            return response();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create order. Error: ' . $e->getMessage()], 500);
        }
    }

    public function updateOrder(Request $request, string $id)
    {
        $json = $request->json()->all();

        try {
            Order::where('id', '=', $id)->update([
                'price' => $json['price'],
                'status' => $json['status']
            ]);

            return response()->json(["orderMessage" => "Order is updated."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update order. Error: ' . $e->getMessage()], 500);
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

    public function deleteOrder(string $id)
    {
        try {
            Order::where('id', '=', $id)->delete();
            return response()->json(["orderMessage" => "Order is deleted."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete order. Error: ' . $e->getMessage()], 500);
        }
    }
}
