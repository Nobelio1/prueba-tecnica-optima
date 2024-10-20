import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'core-home',
  templateUrl: './home.component.html',
  styles: [
    `
      #content {
        margin-left: 245px;
      }
    `,
  ],
})
export class HomeComponent {
  constructor( private gifService: GifService ) {}

  get gifs(): Gif[] {
    return this.gifService.gifList;
  }
}
