import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-available-impl',
  templateUrl: './available-impl.component.html',
  styleUrls: ['./available-impl.component.scss']
})
export class AvailableImplComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [44,27];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }
  

}
