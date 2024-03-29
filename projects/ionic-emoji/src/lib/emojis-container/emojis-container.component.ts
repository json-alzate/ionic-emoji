import {
  Component, OnInit,
  Input,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { IonItemGroup } from '@ionic/angular';


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
  emojisStorage: Emoji[] = [];
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
    this.getEmojis();
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

  // Get recent emojis from localStorage
  getEmojis() {
    const value = localStorage.getItem('ionic_emoji_recent') || '""';
    this.emojisStorage = JSON.parse(value) as Emoji[] || [];

    const recentPackToAdd: EmojiPack = {
      categoryName: 'Recent',
      subCategories: [
        {
          subCategoryName: 'Emojis recent used',
          items: [...this.emojisStorage]
        }
      ]
    };

    this.allEmojisPacks = [recentPackToAdd, ...emojisPacks as EmojiPack[]]

  }

  async addEmojiToLocalStorage(emoji: Emoji) {

    // busca el emoji en emojisStorage y si ya lo tiene no lo agrega, pero lo hubica al principio
    const index = this.emojisStorage.findIndex((item) => item.html_code === emoji.html_code);
    if (index !== -1) {
      this.emojisStorage.splice(index, 1);
    }
    this.emojisStorage.unshift(emoji);
    localStorage.setItem('ionic_emoji_recent', JSON.stringify(this.emojisStorage));
  }


  // scroll to pack
  onGoToSegment(segment: string) {

    console.log(segment);


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

      // para que no busque en los recientes y no se repita el emoji en el resultado
      if (pack.categoryName !== 'Recent') {
        for (const subCategory of pack.subCategories) {
          const subItems = subCategory.items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
          this.searchResultsEmoji = [...this.searchResultsEmoji, ...subItems];
        }
      }

    }

  }


  // Select emoji
  selectEmoji(item: Emoji) {
    this.ionicEmojiService.closeModal(item);
    this.addEmojiToLocalStorage(item);
  }

}
