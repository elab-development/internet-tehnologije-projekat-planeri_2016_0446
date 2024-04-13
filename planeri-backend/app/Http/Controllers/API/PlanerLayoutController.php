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
        $planerLayouts = PlanerLayout::all();
        return $planerLayouts;
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $json = $request->json()->all();

        $planerLayout = PlanerLayout::create([
            'name' => $json['name'],
            'image' => $json['image'],
            'price' => $json['price'],
            'planer_type_id' => $json['planer_type_id']
        ]);

        return response()->json(['message' => 'Planer layout ' . $planerLayout->name . ' is successfully created!']);
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
        $json = request()->json()->all();

        PlanerLayout::where('id', '=', $id)->update([
            'name' => $json['name'],
            'image' => $json['image'],
            'price' => $json['price'],
            'planer_type_id' => $json['planer_type_id']
        ]);

        return response()->json(["planerLayoutMessage" => "PlanerLayout is updated."]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        PlanerLayout::where('id', '=', $id)->delete();

        return response()->json(["planerLayoutMessage" => "PlanerLayout is deleted."]);
    }
}
