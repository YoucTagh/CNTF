import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  useCases = [
    {
      id: '1',
      icon: 'description',
      link: '/usecase/mfml',
      title: 'Multiple formats'
    },
    {
      id: '2',
      icon: 'description',
      link: '/usecase/archive',
      title: 'Archiving'
    },
    {
      id: '3',
      icon: 'description',
      link: '/usecase/capability',
      title: 'Capability'
    },
    {
      id: '4',
      icon: 'description',
      link: '/usecase/smart-building',
      title: 'Smart building'
    },
    {
      id: '5',
      icon: 'description',
      link: '/usecase/rdf-shape',
      title: 'RDF shapes'
    },
    {
      id: '6',
      icon: 'description',
      link: '/usecase/vocabulary',
      title: 'Vocabulary'
    },
    {
      id: '7',
      icon: 'description',
      link: '/usecase/crs',
      title: 'CRS'
    },
    {
      id: '8',
      icon: 'description',
      link: '/usecase/accuracy',
      title: 'Accuracy'
    },
    {
      id: '9',
      icon: 'description',
      link: '/usecase/formatting',
      title: 'Formatting'
    },
    {
      id: '10',
      icon: 'description',
      link: '/usecase/summary',
      title: 'Summary'
    },
    {
      id: '11',
      icon: 'description',
      link: '/usecase/entailment-regime',
      title: 'Entailment Regime'
    },
    {
      id: '12',
      icon: 'description',
      link: '/usecase/owl-profile',
      title: 'OWL Profile'
    },
  ];

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }


}