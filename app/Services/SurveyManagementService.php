<?php

namespace App\Services;

use App\Repositories\JobVacanciesRepository;
use App\Interfaces\Services\JobVacanciesServiceInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class SurveyManagementService implements JobVacanciesServiceInterface {

    protected JobVacanciesRepository $jobVacanciesRepository;

    public function __construct(JobVacanciesRepository $jobVacanciesRepository) {
        $this->jobVacanciesRepository = $jobVacanciesRepository;
    }

    public function getAll(): Collection {
        return $this->jobVacanciesRepository->getAll();
    }

    public function findOrFail(int $id): Model {
        return $this->jobVacanciesRepository->findOrFail($id);
    }

    public function createOrUpdate(array $request){
        if(isset($request['jobvacancy_id']) && request['jobvacancy_id'] > 0){
            return $this->jobVacanciesRepository->update($request['jobvacancy_id'], $request);
        }else{
            $titleExist = $this->jobVacanciesRepository->titleExists($request['title']);
            if($titleExist){
                return false;
            }else{
                $this->jobVacanciesRepository->create($request);
                return true;
            }
        }
    }

    public function delete(int $id): bool {
        return $this->jobVacanciesRepository->findOrFail($id);
    }
}