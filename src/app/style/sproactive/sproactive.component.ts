import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-sproactive',
  templateUrl: './sproactive.component.html',
  styleUrls: ['./sproactive.component.scss']
})
export class SProactiveComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [47];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
