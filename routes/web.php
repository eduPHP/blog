<?php

use App\Http\AdminController;
use App\Http\SiteController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/{any?}', AdminController::class)->where('any', '.*');
Route::get('{any}', SiteController::class)->where('any', '.*');
