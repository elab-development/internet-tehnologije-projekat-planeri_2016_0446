<?php

namespace Database\Seeders;

use App\Models\PlanerLayout;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanerLayoutSeeder extends Seeder
{
    

    public function run(): void
    {
        PlanerLayout::truncate();

        PlanerLayout::create([
            'name'=> "StudentskiLayout1",
            'image' => "StudentskiLayout1",
            'price' => "0.0",
            'planer_type_id' => "2"
        ]);

        PlanerLayout::create([
            'name'=> "StudentskiLayout2",
            'image' => "StudentskiLayout2",
            'price' => "0.0",
            'planer_type_id' => "2"
        ]);

        PlanerLayout::create([
            'name'=> "StudentskiLayout3",
            'image' => "StudentskiLayout3",
            'price' => "0.0",
            'planer_type_id' => "2"
        ]);

        PlanerLayout::create([
            'name'=> "VertikalniDnevniLayout",
            'image' => "VertikalniDnevniLayout",
            'price' => "0.0",
            'planer_type_id' => "1"
        ]);

        PlanerLayout::create([
            'name'=> "HorizontalniDnevniLayout",
            'image' => "HorizontalniDnevniLayout",
            'price' => "0.0",
            'planer_type_id' => "1"
        ]);

        PlanerLayout::create([
            'name'=> "KvadratDnevniLayout",
            'image' => "KvadratDnevniLayout",
            'price' => "0.0",
            'planer_type_id' => "1"
        ]);
    }
}
