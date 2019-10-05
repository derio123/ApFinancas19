import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contas', loadChildren: './views/contas/contas.module#ContasPageModule' },
  { path: 'add', loadChildren: './views/add/add.module#AddPageModule' },
  { path: 'add-lancar', loadChildren: './views/add-lancar/add-lancar.module#AddLancarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
