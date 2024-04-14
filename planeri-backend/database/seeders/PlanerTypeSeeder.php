<?php

namespace Database\Seeders;

use App\Models\PlanerType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanerTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PlanerType::truncate();

        PlanerType::create([
            'name' => "Dnevni",
            'price' => "1400"
        ]);

        PlanerType::create([
            'name' => "Studentski",
            'price' => "1200"
        ]);

        PlanerType::create([
            'name' => "Bullet journal",
            'price' => "1000"
        ]);
    }
}
