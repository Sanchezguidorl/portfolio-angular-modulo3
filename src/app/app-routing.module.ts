import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [{
  path:'about',component:AboutComponent
},
{
path:'main', component:AboutComponent
},
{
path:'home', component:InicioComponent
},
{
path:'projects',component:JobsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
