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
            'id' => 99900,
            'name' => "Studentski veci",
            'size' => "A4",
            'price' => "1000",
            'image' => "/relative/path"
        ]);

        Product::create([
            'id' => 99901,
            'name' => "Studentski manji",
            'size' => "A5",
            'price' => "1200",
            'image' => "/relative/path"
        ]);

        Product::create([
            'id' => 99902,
            'name' => "Dnevni veci",
            'size' => "A4",
            'price' => "900",
            'image' => "/relative/path"
        ]);


        Product::create([
            'id' => 99903,
            'name' => "Dnevni manji",
            'size' => "A5",
            'price' => "2100",
            'image' => "/relative/path"
        ]);
    }
}
