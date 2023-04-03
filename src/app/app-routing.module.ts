import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjekatComponent } from './projekat/projekat.component';
import { GlumciComponent } from './glumci/glumci.component';

const routes: Routes = [
  { path: 'projekat', component: ProjekatComponent },
  { path: 'glumci', component: GlumciComponent },
  {path:'',redirectTo:'/projekat',pathMatch:'full'},
  {path:'**',component: ProjekatComponent}
  
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
