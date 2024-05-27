<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\PlanerController;
use App\Http\Controllers\API\PlanerLayoutController;
use App\Http\Controllers\API\PlanerTypeController;
use App\Http\Controllers\API\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes\
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::delete('/removeAccount', [AuthController::class, 'removeAccount']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/orders', [OrderController::class, 'getOrders']);
    Route::post('/orders', [OrderController::class, 'createOrder']);
});
Route::get('/planerTypes/search={searchExp}', [PlanerTypeController::class, 'getPlanerTypesBySearch']);
Route::get('/planerLayouts/search={searchExp}', [PlanerLayoutController::class, 'getPlanerLayoutsBySearch']);
Route::get('/users/search={searchExp}', [UserController::class, 'getUsersBySearch']);
Route::resource('users', UserController::class);

Route::get('/planers', [PlanerController::class, 'getPlaners']);
Route::resource('planerTypes', PlanerTypeController::class);
Route::resource('planerLayouts', PlanerLayoutController::class);
