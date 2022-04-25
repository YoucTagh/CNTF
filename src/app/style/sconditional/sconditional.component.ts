import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-sconditional',
  templateUrl: './sconditional.component.html',
  styleUrls: ['./sconditional.component.scss']
})
export class SConditionalComponent implements OnInit {
  references: Reference[] = [];
  refIDs: number[] = [64];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }


}
