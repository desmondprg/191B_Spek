import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LogHistoryPage } from '../log-history/log-history.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  
    children: [
      {
      path: 'log-history',
      component: LogHistoryPage,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
