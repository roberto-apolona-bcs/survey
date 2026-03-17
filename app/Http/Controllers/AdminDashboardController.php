<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChartService;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class AdminDashboardController extends Controller
{
    protected $chartService;

    public function __construct(ChartService $chartService) {
        $this->chartService = $chartService;
    }

    /**
     * Survey List
     *
     * @param  obj  $request
     * @return Response
     */
    public function dashboard(){
        $sales = [
            ['month' => 'January', 'total' => 1200],
            ['month' => 'February', 'total' => 1500],
            ['month' => 'March', 'total' => 900],
            ['month' => 'April', 'total' => 1700],
        ];
        return Inertia::render('admin/dashboard', [
            'salesData' => $sales
        ]);
    }
}