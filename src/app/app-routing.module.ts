import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent  }  from './not-found/not-found.component';
import { CampingComponent } from './camping/camping.component';
import { AddCampingComponent } from './add-camping/add-camping.component';
const routes: Routes = [
  {path:'camping', component:CampingComponent},
  {path:'add-camping', component:AddCampingComponent},

  {path : '**',component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
