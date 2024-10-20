import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }
