import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-rdf-shape',
  templateUrl: './rdf-shape.component.html',
  styleUrls: ['./rdf-shape.component.scss']
})
export class RDFShapeComponent implements OnInit {


  references: Reference[] = [];
  refIDs: number[] = [2,7,13,23,3];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
}
