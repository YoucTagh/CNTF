import { Component, OnInit } from '@angular/core';
import { Abbreviation, abbreviations } from '../_files/AbbreviationsList';

@Component({
  selector: 'app-abbreviation',
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.scss']
})
export class AbbreviationComponent implements OnInit {

  abbList: Abbreviation[] = JSON.parse(JSON.stringify(abbreviations));

  abbConferences: Abbreviation[] = [];
  abbVolumes: Abbreviation[] = [];
  acronyms: Abbreviation[] = [];

  constructor() { }

  ngOnInit(): void {
    this.abbList.forEach(element => {
      if (element.type === 1) {
        this.abbConferences.push(element);
      } else if (element.type === 2) {
        this.abbVolumes.push(element);
      } else if (element.type === 3) {
        this.acronyms.push(element);
      }
    });
  }

}
