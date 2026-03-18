<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SurveyManagementService;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class SurveyManagementController extends Controller
{
    protected $surveyManagementService;

    public function __construct(SurveyManagementService $surveyManagementService) {
        $this->surveyManagementService = $surveyManagementService;
    }

    /**
     * Survey List
     *
     * @param  obj  $request
     * @return Response
     */
    public function getList(){
        return Inertia::render('admin/surveylist');
    }

    /**
     * Survey Form
     *
     * @param  obj  $request
     * @return Response
     */
    public function create(){
        return Inertia::render('admin/createsurvey');
    }

    /**
     * Save Survey
     *
     * @param  obj  $request
     * @return Response
     */
    public function store(){
        return false;
    }

    /**
     * Get Survey Details
     *
     * @param  obj  $request
     * @return Response
     */
    public function getdetails($id){
        return Inertia::render('admin/surveydetails');
    }

    /**
     * Update Survey
     *
     * @param  obj  $request
     * @return Response
     */
    public function updatedetails($id){
        return false;
    }



}