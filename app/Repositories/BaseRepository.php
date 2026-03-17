<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

abstract class BaseRepository {

    protected $model;

    public function getAll(): Collection {
        return $this->model->all();
    }

    public function find(int $id): ?Model {
        return $this->model->find($id);
    }

    public function create(array $data): Model {
        return $this->model->create($data);
    }

    public function update(int $id, array $data): Model {
        $record = $this->model->findOrFail($id);
        $record->update($data);
        return $record;
    }

    public function delete(int $id): bool {
        return $this->model->destroy($id);
    }

    public function findOrFail(int $id) {
        return $this->model->findOrFail($id);
    }
}
