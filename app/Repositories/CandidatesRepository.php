<?php

namespace App\Repositories;

use App\Models\Candidates;
use App\Repositories\BaseRepository;

class CandidatesRepository extends BaseRepository {

    public function __construct(Candidates $model) {
        $this->model = $model;
    }

    public function emailExists(string $email): bool {
        return $this->model->where('email', $email)->exists();
    }
}
