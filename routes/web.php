<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {
    Route::resources([
        'blogs' => BlogController::class
    ]);
});


require __DIR__.'/auth.php';