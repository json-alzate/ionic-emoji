import { Component, OnInit, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';


import { Emoji, EmojiPack } from '../models/emoji.model';

import { IonicEmojiService } from '../ionic-emoji.service';


@Component({
  selector: 'lib-emojis-container',
  templateUrl: './emojis-container.component.html',
  styleUrls: ['./emojis-container.component.css']
})
export class EmojisContainerComponent implements OnInit {

  // presentation
  // @Input() presentationMode: 'modal' | 'popover' | null;
  allEmojisPacks: EmojiPack[] = [];

  constructor(
    private ionicEmojiService: IonicEmojiService
  ) { }

  ngOnInit(): void {
  }


  getEmojis() {
    this.ionicEmojiService.getEmojis().subscribe(data => {
      if (data) {
        this.allEmojisPacks = data;
      }
    })
  }

}
