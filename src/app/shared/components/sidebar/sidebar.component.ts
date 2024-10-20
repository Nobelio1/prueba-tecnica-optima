import { Component } from '@angular/core';
import { GifService } from 'src/app/core/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      #sidebar {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
      }
    `,
  ],
})
export class SidebarComponent {

  constructor( private gifService: GifService  ) {}

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  searchTag( tag: string ) {
    this.gifService.searchTag( tag );
  }
}
