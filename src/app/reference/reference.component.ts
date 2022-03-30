import { Reference } from '../_files/ReferencesList';
import { Component, OnInit } from '@angular/core';
import { references } from '../_files/ReferencesList';


interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  searchValue: string = '';

  allReferences: Reference[] = JSON.parse(JSON.stringify(references));
  refs: Reference[] = JSON.parse(JSON.stringify(references));
  selectedFilter?: Filter;

  filters: Filter[] = [
    { value: 'title', viewValue: 'Title' },
    { value: 'author', viewValue: 'Author' },
    { value: 'year', viewValue: 'Year' },
  ];
  constructor() { }

  ngOnInit(): void {

    this.refs.map((ref) => {
      ref.abstract = "";
      return ref;
    })

    this.allReferences.map((ref) => {
      ref.abstract = "";
      return ref;
    })

    this.sortRefsByYear();

  }

  showHideAbstract(title: string) {

    let answer = this.refs.find((ref) => {
      return ref.title == title;
    })

    if (answer) {

      if (answer.abstract.length == 0) {
        let abs = references.find((ref) => {
          return ref.title == title;
        })
        answer.abstract = (abs?.abstract) ? abs?.abstract : "Abstract unavailable";
      }
      else {
        answer.abstract = "";
      }
    }
  }

  onFilterChange(value: string) {
    if (value == "author") {
      this.sortRefsByAuthor();
    } else if (value == "year") {
      this.sortRefsByYear();
    } else if (value == "title") {
      this.sortRefsByTitle();
    }
  }
  sortRefsByYear() {
    this.refs.sort((a, b) => {
      return b.date - a.date;
    })
  }
  sortRefsByTitle() {
    this.refs.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
  }

  sortRefsByAuthor() {
    this.refs.sort((a, b) => {
      return a.authors.localeCompare(b.authors);
    })
  }

  filterReferences(){

    this.refs = this.allReferences.filter(ref => (ref.title +" " +ref.date).toLowerCase().includes(this.searchValue.toLowerCase()));
  }
}
