import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModule } from './game/game.module';
import { HomeModule } from './home/home.module';
import { CardModule } from './card/card.module';
import { AccordionModule } from './accordion/accordion.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameModule,
    HomeModule,
    CardModule,
    AccordionModule
  ]
})
export class PagesModule { }
