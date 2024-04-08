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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
