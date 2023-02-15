import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalController } from '@ionic/angular';

import { Emoji, EmojiPack } from './models/emoji.model';

import { EmojisContainerComponent } from './emojis-container/emojis-container.component';
import { Observable, Observer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IonicEmojiService {

  private observerEmoji!: Observer<Emoji>;

  constructor(
    private httpClient: HttpClient,
    private modalController: ModalController
  ) { }

  getEmojis() {
    return this.httpClient.get<EmojiPack[]>('/resources/emojis.json');
  }


  presentModal(): Observable<Emoji> {

    this.openModal()

    const emoji$ = new Observable<Emoji>((sub) => {
      this.observerEmoji = sub;
    });

    return emoji$;

  }

  private async openModal() {
    const modal = await this.modalController.create({
      id: 'emoji-modal' + Date.now(),
      component: EmojisContainerComponent,
    });

    await modal.present();
  }

  closeModal(emoji: Emoji) {
    this.observerEmoji.next(emoji);
    this.modalController.dismiss();
  }

}
