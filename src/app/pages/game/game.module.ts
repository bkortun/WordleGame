import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';
import { SplitPipe } from 'src/app/pipes/split.pipe';



@NgModule({
  declarations: [
    GameComponent,
    SplitPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:GameComponent}])
  ]
})
export class GameModule { }
