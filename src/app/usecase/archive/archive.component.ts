import { Component, OnInit } from '@angular/core';
import { Reference, references } from 'src/app/_files/ReferencesList';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  references: Reference[] = [];
  refIDs: number[] = [38,58];
  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
