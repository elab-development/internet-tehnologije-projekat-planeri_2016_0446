<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts()
    {
        $products = Product::all();
        return $products;
    }

    public function getProductsBySearch(string $searchExp)
    {
        $products = Product::where('name', 'like', '%' . $searchExp . '%')->get();
        return $products;
    }
}
