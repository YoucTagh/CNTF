import { Injectable } from '@angular/core';
import { Requirement, requirements } from 'src/app/_files/RequirementList';
import { UseCaseService } from '../usecase/use-case.service';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor() { }

  findOneRequirement(id: number): Requirement {
    let requirement = requirements.filter(requirement => requirement.id == id)[0];
    //requirement.useCases = requirement.useCaseIDs.map((id: number) => this.useCaseService.findOneUseCase(id));
    return requirement;
  }
}
