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
      icon: 'build',
      link: '/usecase/mfml',
      title: 'Multiple formats'
    },
    {
      id: '2',
      icon: 'build',
      link: '/usecase/archive',
      title: 'Archiving'
    },
    {
      id: '3',
      icon: 'build',
      link: '/usecase/capability',
      title: 'Capability'
    },
    {
      id: '4',
      icon: 'build',
      link: '/usecase/smart-building',
      title: 'Smart building'
    },
    {
      id: '5',
      icon: 'build',
      link: '/usecase/rdf-shape',
      title: 'RDF shapes'
    },
    {
      id: '6',
      icon: 'build',
      link: '/usecase/vocabulary',
      title: 'Vocabulary'
    },
    {
      id: '7',
      icon: 'build',
      link: '/usecase/crs',
      title: 'CRS'
    },
    {
      id: '8',
      icon: 'build',
      link: '/usecase/accuracy',
      title: 'Accuracy'
    },
    {
      id: '9',
      icon: 'build',
      link: '/usecase/formatting',
      title: 'Formatting'
    },
    {
      id: '10',
      icon: 'build',
      link: '/usecase/summary',
      title: 'Summary'
    },
    {
      id: '11',
      icon: 'build',
      link: '/usecase/entailment-regime',
      title: 'Entailment Regime'
    },
    {
      id: '12',
      icon: 'build',
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