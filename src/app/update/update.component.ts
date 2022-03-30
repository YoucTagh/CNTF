import { Component, OnInit } from '@angular/core';
import { futureUpdates, Update, updates } from '../_files/UpdatesList';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  updates: Update[] = JSON.parse(JSON.stringify(updates));
  futureUpdates: string[] = futureUpdates;
  constructor() { }

  ngOnInit(): void {
    this.updates.sort((u1, u2) => {
      return u2.date > u1.date ? 1 : -1;
    });
  }

}
