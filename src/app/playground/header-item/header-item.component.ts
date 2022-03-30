import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderItem } from '../model/header';

@Component({
  selector: 'playground-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderItemComponent implements OnInit {

  @Input() header!: HeaderItem;
  @Output() deleteRequest: EventEmitter<HeaderItem> = new EventEmitter<HeaderItem>();

  constructor() { }

  ngOnInit(): void {

  }

  delete() {
    this.deleteRequest.emit(this.header);
  }

  keyChange(event: any) {
    console.log(event);

  }

}
