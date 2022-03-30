import { Component, OnInit } from '@angular/core';
import { Reference, references } from '../_files/ReferencesList';
import { Term, terms, TermsResemblance, termsResemblance } from '../_files/TerminologyList';
@Component({
  selector: 'app-terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.scss'],
})
export class TerminologyComponent implements OnInit {


  terms: Term[] = JSON.parse(JSON.stringify(terms));
  termsResemblance: TermsResemblance[] = JSON.parse(JSON.stringify(termsResemblance));
  references: Reference[] = [];
  constructor() { }

  ngOnInit(): void {
    var refIDs = terms
      .map((term) => term.descriptions.map(termDesc => termDesc.reference))
      .reduce((accumulator, value) => accumulator.concat(value), []);

    refIDs = refIDs.concat(termsResemblance
      .map((term) => term.reference));

    this.references = references.filter(ref => refIDs.find(id => ref.id == id));
  }

}
