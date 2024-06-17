<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PlanerType;
use Illuminate\Http\Request;

class PlanerTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $planerTypes = PlanerType::all();
        return $planerTypes;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $json = $request->json()->all();

        try {
            $planerType = PlanerType::create([
                'name' => $json['name'],
                'price' => $json['price']
            ]);
            return response()->json(['message' => 'Planer type ' . $planerType->name . ' with price ' . $planerType->price . ' is successfully created!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create planer type. Error: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $planerType = PlanerType::find($id);
        return $planerType;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $json = $request->json()->all();


        try {
            PlanerType::where('id', '=', $id)->update([
                'name' => $json['name'],
                'price' => $json['price']
            ]);

            return response()->json(["planerTypeMessage" => "PlanerType is updated."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update planer type. Error: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            PlanerType::where('id', '=', $id)->delete();
            return response()->json(["planerTypeMessage" => "PlanerType is deleted."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete planer type. Error: ' . $e->getMessage()], 500);
        }
    }

    public function getPlanerTypesBySearch(string $searchExp)
    {
        $planerTypes = PlanerType::where('name', 'like', '%' . $searchExp . '%')->get();
        return $planerTypes;
    }
}
