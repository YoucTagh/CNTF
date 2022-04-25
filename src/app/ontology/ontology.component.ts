import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.scss']
})
export class OntologyComponent implements OnInit {

  wvo: string = "https://service.tib.eu/webvowl/#iri=https://ci.mines-stetienne.fr/hmas/core.ttl";
  safeURL?: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.wvo
    );

  }

}
