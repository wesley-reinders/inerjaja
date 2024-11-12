<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dasboard2');
})->name('dashboard');

Route::post('/blogs/create', [BlogController::class, 'store'])->name('blogs.create');

