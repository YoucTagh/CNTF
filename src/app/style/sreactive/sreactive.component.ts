import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-sreactive',
  templateUrl: './sreactive.component.html',
  styleUrls: ['./sreactive.component.scss']
})
export class SReactiveComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [47];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
