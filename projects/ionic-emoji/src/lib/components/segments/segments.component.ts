import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {

  @Output() changeSegment = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goToSegment(event: any) {
    this.changeSegment.emit(event?.detail?.value);
  }

}
