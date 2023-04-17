import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path:"",component:LayoutComponent, children:[
    {path:"",component:HomeComponent},
    {path:"game",loadChildren:()=>import("./pages/game/game.module").then(module=>module.GameModule)},
    {path:"card",loadChildren:()=>import("./pages/card/card.module").then(module=>module.CardModule)},
    {path:"accordion",loadChildren:()=>import("./pages/accordion/accordion.module").then(module=>module.AccordionModule)},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
