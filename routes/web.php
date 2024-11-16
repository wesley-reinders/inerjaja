<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/blogs', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::post('/blogs', [BlogController::class, 'store'])->name('blogs.create');

