import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchEmoji: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: any) {
    const query = event.detail?.value;
    this.searchEmoji.emit(query);
  }

}
