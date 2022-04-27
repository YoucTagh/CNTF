import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-o-visualisation',
  templateUrl: './o-visualisation.component.html',
  styleUrls: ['./o-visualisation.component.scss']
})
export class OVisualisationComponent implements OnInit {

  wvo: string = "https://service.tib.eu/webvowl/#iri=https://w3id.org/cntf/ontology.ttl";
  safeURL?: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.wvo
    );

  }
}
