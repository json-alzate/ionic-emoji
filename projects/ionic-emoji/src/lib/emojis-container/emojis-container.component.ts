import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-emojis-container',
  templateUrl: './emojis-container.component.html',
  styleUrls: ['./emojis-container.component.css']
})
export class EmojisContainerComponent implements OnInit {

  // presentation
  @Input() presentationMode: 'modal' | 'popover' | null;

  constructor() { }

  ngOnInit(): void {
  }

}
