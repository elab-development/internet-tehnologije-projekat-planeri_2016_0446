<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PlanerLayout;
use Illuminate\Http\Request;

class PlanerLayoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $planerLayouts = PlanerLayout::with('planerType')->get();
        return $planerLayouts;
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $json = $request->json()->all();

        try {
            $planerLayout = PlanerLayout::create([
                'name' => $json['name'],
                'price' => $json['price'],
                'planer_type_id' => $json['planer_type_id']
            ]);

            return response()->json(['message' => 'Planer layout ' . $planerLayout->name . ' is successfully created!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create planer layout. Error: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $planerLayout = PlanerLayout::find($id);
        return $planerLayout;
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $json = $request->json()->all();

        try {
            PlanerLayout::where('id', '=', $id)->update([
                'name' => $json['name'],
                'price' => $json['price'],
                'planer_type_id' => $json['planer_type_id']
            ]);

            return response()->json(["planerLayoutMessage" => "PlanerLayout is updated."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update planer layout. Error: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            PlanerLayout::where('id', '=', $id)->delete();

            return response()->json(["planerLayoutMessage" => "Planer layout is deleted."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete planer layout. Error: ' . $e->getMessage()], 500);
        }
    }

    public function getPlanerLayoutsBySearch(string $searchExp)
    {
        $planerLayouts = PlanerLayout::where('name', 'like', '%' . $searchExp . '%')->get();
        return $planerLayouts;
    }
}
