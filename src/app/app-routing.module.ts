import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeDateListComponent } from './home-date-list/home-date-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeDateListComponent,
    pathMatch:'full'
  },
    {
    path:'about',
    component:AboutComponent,
    },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
