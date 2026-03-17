<?php

namespace App\Interfaces\Services;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface SurveyManagementServiceInterface {

    public function getAll(): Collection;

    public function findOrFail(int $id): Model;

    public function createOrUpdate(array $data);
    
    public function delete(int $id): bool;

}