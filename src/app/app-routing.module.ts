import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'carros',
    loadChildren: () => import('./filmes/carros/carros.module').then( m => m.CarrosPageModule)
  },
  {
    path: 'dragon-ball',
    loadChildren: () => import('./filmes/dragon-ball/dragon-ball.module').then( m => m.DragonBallPageModule)
  },
  {
    path: 'jurassic-world',
    loadChildren: () => import('./filmes/jurassic-world/jurassic-world.module').then( m => m.JurassicWorldPageModule)
  },
  {
    path: 'inexorable',
    loadChildren: () => import('./filmes/inexorable/inexorable.module').then( m => m.InexorablePageModule)
  },
  {
    path: 'minions-two',
    loadChildren: () => import('./filmes/minions-two/minions-two.module').then( m => m.MinionsTwoPageModule)
  },
  {
    path: 'a-fera',
    loadChildren: () => import('./filmes/a-fera/a-fera.module').then( m => m.AFeraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
