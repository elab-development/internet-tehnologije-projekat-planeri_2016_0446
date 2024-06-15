<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::truncate();

        Product::create([
            'name' => "Product 1",
            'size' => "A4",
            'price' => "1000",
            'image' => "/relative/path"
        ]);

        Product::create([
            'name' => "Product 2",
            'size' => "A5",
            'price' => "1200",
            'image' => "/relative/path"
        ]);

        Product::create([
            'name' => "Product 3",
            'size' => "A4",
            'price' => "900",
            'image' => "/relative/path"
        ]);


        Product::create([
            'name' => "Product 4",
            'size' => "A5",
            'price' => "2100",
            'image' => "/relative/path"
        ]);
    }
}
