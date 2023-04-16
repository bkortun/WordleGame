import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModule } from './game/game.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameModule,
    HomeModule
  ]
})
export class PagesModule { }
