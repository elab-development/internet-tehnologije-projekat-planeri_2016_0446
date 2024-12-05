<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProducts()
    {
        $products = Product::all();
        return $products;
    }

    public function getProductsByIds(Request $request)
    {
        $json = $request->json()->all();

        $products = Product::whereIn('id', $json)->get();
        return $products;
    }

    public function getProductsBySearch(string $searchExp)
    {
        $products = Product::where('name', 'like', '%' . $searchExp . '%')->get();
        return $products;
    }
}
