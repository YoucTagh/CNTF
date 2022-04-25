import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-dauthorization',
  templateUrl: './dauthorization.component.html',
  styleUrls: ['./dauthorization.component.scss']
})
export class DAuthorizationComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
