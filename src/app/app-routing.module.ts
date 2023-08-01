import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeDateListComponent } from './home-date-list/home-date-list.component';
import { NameListComponent } from './name-list/name-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDateListComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'name-list',
    component: NameListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
