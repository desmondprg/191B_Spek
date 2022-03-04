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
    path: 'log-history',
    loadChildren: () => import('./log-history/log-history.module').then( m => m.LogHistoryPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'drafts',
    loadChildren: () => import('./drafts/drafts.module').then( m => m.DraftsPageModule)
  },  {
    path: 'draft-edit',
    loadChildren: () => import('./draft-edit/draft-edit.module').then( m => m.DraftEditPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
