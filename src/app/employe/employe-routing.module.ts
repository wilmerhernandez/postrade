import { NgModule } from '@angular/core';
import { EmployeComponent } from './employe/employe.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    redirectTo: "employe",
    pathMatch: "full",
  },
  {
    path: "employe",
    component: EmployeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeRoutingModule { }
