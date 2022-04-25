import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-sadaptive',
  templateUrl: './sadaptive.component.html',
  styleUrls: ['./sadaptive.component.scss']
})
export class SAdaptiveComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [63];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
