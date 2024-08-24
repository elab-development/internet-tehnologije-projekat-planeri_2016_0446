<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Planer;
use Illuminate\Http\Request;

class PlanerController extends Controller
{
    public function getPlaners()
    {
        $planers = Planer::with('planerType')->get();
        return $planers;
    }

    public function createPlaner(Request $request)
    {
        $json = $request->json()->all();

        try {
            $createdPlaner = Planer::create([
                'planer_type_id' => $json['planer_type_id'],
                'cover' => $json['cover_type'],
                'cover_design' => $json['cover_design'],
                'page_number' => $json['page_number'],
                'page_layout' => $json['page_layout'],
                'price' => $json['price'],
                'size' => $json['size'],
                'front_page' => $json['front_page'],
                'dates' =>  $json['dates'],
                'daily_planer_design' => $json['daily_planer_design'],
                'notes' => $json['notes'],
            ]);

            return response()->json(['message' => 'Planer successfully created!', 'createdPlaner' => $createdPlaner]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create planer. Error: ' . $e->getMessage()], 500);
        }
    }

    public function deletePlaner(string $id)
    {
        try {
            Planer::where('id', '=', $id)->delete();

            return response()->json(["planerMessage" => "Planer is deleted."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete planer. Error: ' . $e->getMessage()], 500);
        }
    }
}
