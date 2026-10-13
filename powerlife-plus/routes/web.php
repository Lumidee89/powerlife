<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\MovieController;
use App\Http\Controllers\Admin\DashboardController;

Route::get('/', function () {
    return Inertia::render(
        'Landing/Index'
    );
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get(
        '/dashboard',
        [DashboardController::class, 'index']
    )->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'superadmin'])->prefix('admin')->group(function () {
    Route::get('/movies', [MovieController::class, 'index'])->name('movies.index');
    Route::get('/movies/add', [MovieController::class, 'create'])->name('movies.create');
    Route::post('/movies', [MovieController::class, 'store'])->name('movies.store');
});

require __DIR__.'/auth.php';