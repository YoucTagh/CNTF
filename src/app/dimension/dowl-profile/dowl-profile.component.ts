import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dowl-profile',
  templateUrl: './dowl-profile.component.html',
  styleUrls: ['./dowl-profile.component.scss']
})
export class DOwlProfileComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
