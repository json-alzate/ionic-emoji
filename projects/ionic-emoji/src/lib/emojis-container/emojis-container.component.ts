import { Component, OnInit, Input, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IonItemGroup } from '@ionic/angular';
import { Observable, Observer } from 'rxjs';


import { Emoji, EmojiPack } from '../models/emoji.model';

import { IonicEmojiService } from '../ionic-emoji.service';

import emojisPacks from '../../resources/emojis.json';


@Component({
  selector: 'lib-emojis-container',
  templateUrl: './emojis-container.component.html',
  styleUrls: ['./emojis-container.component.css']
})
export class EmojisContainerComponent implements OnInit {

  allEmojisPacks: EmojiPack[] = [];
  @ViewChildren(IonItemGroup, { read: ElementRef }) itemGroups!: QueryList<any>;

  // presentation
  // @Input() presentationMode: 'modal' | 'popover' | null;


  constructor(
    private ionicEmojiService: IonicEmojiService
  ) {
    this.allEmojisPacks = emojisPacks as EmojiPack[];
  }

  ngOnInit(): void {
  }

  // scroll to pack
  onGoToSegment(segment: string) {

    for (let i = 0; i < this.allEmojisPacks.length; i++) {
      const pack = this.allEmojisPacks[i];

      if (segment === pack.categoryName) {
        const group = this.itemGroups.filter((element, index) => index === i);
        if (group) {
          const el: any = group[0];
          el.nativeElement.scrollIntoView();
          return;
        }
      }

    }

  }

}
