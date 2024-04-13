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

        $planerType = PlanerType::create([
            'name' => $json['name'],
            'image' => $json['image'],
            'price' => $json['price']
        ]);

        return response()->json(['message' => 'Planer design ' . $planerType->name . ' with price ' . $planerType->price . ' is successfully created!']);
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

        PlanerType::where('id', '=', $id)->update([
            'name' => $json['name'],
            'image' => $json['image'],
            'price' => $json['price']
        ]);

        return response()->json(["planerTypeMessage" => "PlanerType is updated."]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        PlanerType::where('id', '=', $id)->delete();
        return response()->json(["planerTypeMessage" => "PlanerType is deleted."]);
    }
}
