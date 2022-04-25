import { Component, OnInit } from '@angular/core';
import { Reference, references } from '../_files/ReferencesList';

export interface PeriodicElement {
  reference: string;
  date: number;
  style: string;
  dimension: string;
  conveyance: string;
  protocol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { reference: '[66]', date: 2001, style: 'Proactive', dimension: 'Capacity', conveyance: 'Header', protocol: 'HTTP' },
  { reference: '[16]', date: 2003, style: 'Adaptive', dimension: 'Capacity', conveyance: 'QSA', protocol: 'HTTP' },
  { reference: '[67]', date: 2018, style: 'Reactive', dimension: 'Media type', conveyance: 'ARK', protocol: 'HTTP' },
  { reference: '[38]', date: 2018, style: 'Reactive', dimension: 'Version', conveyance: 'Header', protocol: 'HTTP' },
  { reference: '[44]', date: 2018, style: 'Proactive, Adaptive', dimension: 'Presentation', conveyance: 'Header', protocol: 'HTTP, CoAP' },
  { reference: '[67]', date: 2018, style: 'Conditional', dimension: 'Media type', conveyance: 'Header', protocol: 'HTTP' },
  { reference: '[56]', date: 2018, style: '', dimension: 'Media type', conveyance: 'Header', protocol: 'CoAP' },
];

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  displayedColumns: string[] = ['reference', 'style', 'dimension', 'conveyance', 'protocol', 'date'];
  dataSource = ELEMENT_DATA;

  references: Reference[] = [];
  refIDs: number[] = [66,16,67,38,44,56,67];



  constructor() { }

  ngOnInit(): void {
    this.references = references.filter(ref => this.refIDs.find(id => ref.id == id));
  }

}
