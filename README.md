# Ionic-emoji

ionic-emoji es una librería que permite mostrar emojis en aplicaciones  creadas con el framework Ionic/Angular.
Aunque puede ser utilizada en aplicaciones móviles, tiene mas sentido hacerlo en aplicaciones web, donde el selector de emojis no es tan accesible en algunos casos.

<br/>
<br/>



## Instalación
Para instalar ionic-emoji, simplemente ejecute el siguiente comando:

``` 
npm install ionic-emoji
```

Luego, agregue IonicEmojiModule al arreglo de imports de su módulo:

```
import { IonicEmojiModule } from 'ionic-emoji';

@NgModule({
  imports: [
    ...
    IonicEmojiModule,
    ...
  ],
    ...
})

```

<br/>
<br/>

## Uso

En su componente inyecte el servicio EmojiService:

```
import { IonicEmojiService } from 'ionic-emoji';


export class AppComponent {
  constructor(private ionicEmojiService: IonicEmojiService) {}
}
```

Luego, para lanzar el selector de emojis, ejecute el método presentModal:

```
    this.ionicEmojiService.presentModal().subscribe((emoji) => {
      if (emoji) {
        console.log(emoji.symbol);
        console.log(emoji);
      }
    });
```

<br/>
<br/>

## Características

- Selector de emojis
- Buscador de emojis
- Emojis recientes

<br/>
<br/>

## Usado por

<br/>


![Lulla.care](imgs_docs/lulla.png)

<br/>
<br/>

## Contribución

Si encuentra un problema o tiene una idea para una nueva característica, no dude en crear un problema o enviar una solicitud de extracción en el repositorio de GitHub de ionic-emoji.


