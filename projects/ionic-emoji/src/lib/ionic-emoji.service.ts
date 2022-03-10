import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalController } from '@ionic/angular';

import { Emoji, EmojiPack } from './models/emoji.model';

import { EmojisContainerComponent } from './emojis-container/emojis-container.component';


@Injectable({
  providedIn: 'root'
})
export class IonicEmojiService {

  constructor(
    private httpClient: HttpClient,
    private modalController: ModalController
  ) { }

  getEmojis() {
   return this.httpClient.get<EmojiPack[]>('/resources/emojis.json');
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: EmojisContainerComponent,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
