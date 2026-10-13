<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MovieController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/movies', [MovieController::class, 'index']);
    Route::get('/movies/featured', [MovieController::class, 'featured']);
    Route::get('/movies/{id}', [MovieController::class, 'show']);
    Route::get('/stream/{movie}', [MovieController::class, 'stream']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/movies', [MovieController::class, 'store']);
});

});