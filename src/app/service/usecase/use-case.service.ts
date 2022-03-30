import { Injectable } from '@angular/core';
import { UseCase, useCases } from 'src/app/_files/UseCaseList';
import { RequirementService } from '../requirement/requirement.service';

@Injectable({
  providedIn: 'root'
})
export class UseCaseService {

  constructor() { }

  findOneUseCase(id: number): UseCase {
    let useCase = useCases.filter(useCase => useCase.id == id)[0];
    //useCase.requirements = useCase.requirementIDs.map((id: number) => this.requirementService.findOneRequirement(id));
    return useCase;
  }
}
