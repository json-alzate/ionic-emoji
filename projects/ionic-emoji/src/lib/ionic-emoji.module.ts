import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { IonicEmojiComponent } from './ionic-emoji.component';
import { EmojisContainerComponent } from './emojis-container/emojis-container.component';

import * as fromComponents from './components/';

@NgModule({
  declarations: [
    IonicEmojiComponent,
    EmojisContainerComponent,
    ...fromComponents.COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  entryComponents: [
    EmojisContainerComponent
  ],
  exports: [
    IonicEmojiComponent
  ]
})
export class IonicEmojiModule { }
