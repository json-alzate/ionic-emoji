import { Component, OnInit, Input, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
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
export class EmojisContainerComponent implements OnInit, AfterViewInit {

  allEmojisPacks: EmojiPack[] = [];
  @ViewChildren(IonItemGroup, { read: ElementRef }) itemGroups!: QueryList<any>;
  // presentation
  // @Input() presentationMode: 'modal' | 'popover' | null;

  elementGroups: any[] = [];
  toSetSegment: number = 0;

  // for Search
  showSearchResults = false;
  searchResultsEmoji: Emoji[] = [];

  constructor(
    private ionicEmojiService: IonicEmojiService
  ) {
    this.allEmojisPacks = emojisPacks as EmojiPack[];
  }


  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.elementGroups = [];
    for (let i = 0; i < this.allEmojisPacks.length; i++) {
      const group = this.itemGroups.filter((element, index) => index === i)[0];
      this.elementGroups.push(group);
    }
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

  // on scroll
  onScroll(event: any) {
    const arrValues: {
      top: number,
      value: number
    }[] = [];
    for (let i = 0; i < this.elementGroups.length; i++) {
      const rect = this.elementGroups[i].nativeElement.getBoundingClientRect();
      if (rect.top < 0) {
        const toAdd = {
          top: rect.top * -1,
          value: i
        };
        arrValues.push(toAdd);
      }
    }
    const result = arrValues.sort((a, b) => {
      return a.top - b.top;
    });
    if (result.length > 0) {
      this.toSetSegment = result[0].value + 1;
    }
  }

  isElementInViewport(el: any) {
    const rect = el.nativeElement.getBoundingClientRect();
    console.log(rect.y);

    return (parseInt(rect.height) + parseInt(rect.top)) - 100 > 0;
  }

  // Search
  onSearchByText(query: string) {
    this.showSearchResults = query === '' ? false : true;
    this.searchResultsEmoji = [];

    for (const pack of this.allEmojisPacks) {

      for (const subCategory of pack.subCategories) {
        const subItems = subCategory.items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        this.searchResultsEmoji = [...this.searchResultsEmoji, ...subItems];
      }

    }

  }


  // Select emoji
  selectEmoji(item: Emoji) {
    this.ionicEmojiService.closeModal(item);
  }

}
