import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

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
    IonicModule
  ],
  entryComponents: [
    EmojisContainerComponent
  ],
  exports: [
    IonicEmojiComponent
  ]
})
export class IonicEmojiModule { }
