import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path:"",component:LayoutComponent, children:[
    {path:"",component:HomeComponent},
    {path:"game",loadChildren:()=>import("./pages/game/game.module").then(module=>module.GameModule)},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
