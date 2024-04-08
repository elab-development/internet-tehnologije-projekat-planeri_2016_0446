<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Planer;

class PlanerController extends Controller
{
    public function getPlaners()
    {
        $planers = Planer::all();
        return $planers;
    }
}
