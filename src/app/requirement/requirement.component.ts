import { Component, OnInit } from '@angular/core';
import { Requirement, requirements } from '../_files/RequirementList';
import { UseCase, useCases } from '../_files/UseCaseList';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})
export class RequirementComponent implements OnInit {

  requirements: Requirement[] = JSON.parse(JSON.stringify(requirements));
  useCases: UseCase[] = [];
  constructor() { }

  ngOnInit(): void {

    this.useCases = requirements.map(req => req.useCases)
      .reduce((accumulator, value) => accumulator.concat(value), []);
  }

}
