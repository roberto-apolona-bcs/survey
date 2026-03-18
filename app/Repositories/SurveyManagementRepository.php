<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Models\JobVacancies;
use App\Repositories\BaseRepository;

class SurveyManagementRepository extends BaseRepository {

    protected $model;

    public function __construct(JobVacancies $model) {
        $this->model = $model;
    }

    public function titleExists(string $title): bool {
        return $this->model->where('title', $title)->exists();
    }
    
}
