<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {
    Route::get('/blogs', [BlogController::class, 'index']);
    Route::post('/blogs', [BlogController::class, 'store']);

    Route::get('/blogs/create', [BlogController::class, 'show'])->name('blogs.create');
    Route::patch('/blogs/edit', [BlogController::class], 'update');
});

require __DIR__.'/auth.php';