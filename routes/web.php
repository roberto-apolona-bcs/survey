<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\SurveyManagementController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', [AdminDashboardController::class, 'dashboard'])->name('dashboard');

    Route::group( ['prefix' => 'survey-management'], function() {
        Route::get('/', [SurveyManagementController::class, 'getList'])->name('surveylist');
        Route::get('/create', [SurveyManagementController::class, 'create'])->name('surveyadd');
        Route::post('/create', [SurveyManagementController::class, 'store'])->name('surveystore');
        Route::get('/{id}', [SurveyManagementController::class, 'getdetails'])->name('surveyget');
        Route::post('/{id}', [SurveyManagementController::class, 'updatedetails'])->name('surveyupdate');
    });


});

require __DIR__.'/settings.php';
