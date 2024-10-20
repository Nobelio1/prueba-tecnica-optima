import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'core-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input()
  public gifs: Gif[] = [];
}
