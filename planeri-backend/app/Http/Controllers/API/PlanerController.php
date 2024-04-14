<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Planer;
use Illuminate\Http\Request;

class PlanerController extends Controller
{
    public function getPlaners()
    {
        $planers = Planer::all();
        return $planers;
    }

    public function createPlaner(Request $request)
    {
        $json = $request->json()->all();
        try {
            Planer::create([
                'planer_type_id' => $json['planer_type_id'],
                'cover' => $json['cover'],
                'page_number' => $json['page_number'],
                'has_calendar' => $json['has_calendar'],
                'page_layout' => $json['page_layout'],
                'price' => $json['price'],
                'size' => $json['size'],
                'cover_design' => $json['cover_design'],
                'front_page' => isset($json['front_page']) ? $json['front_page'] : null,
                'dates' => isset($json['dates']) ? $json['dates'] : null,
                'daily_planer_design' => isset($json['daily_planer_design']) ? $json['daily_planer_design'] : null,
                'notes' => isset($json['notes']) ? $json['notes'] : null,
                'package_layout' => isset($json['package_layout']) ? $json['package_layout'] : null
            ]);

            return response()->json(['message' => 'Planer successfully created!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create planer. Error: ' . $e->getMessage()], 500);
        }
    }
}
