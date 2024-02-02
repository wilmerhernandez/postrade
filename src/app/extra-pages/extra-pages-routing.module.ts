import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlankComponent } from "./blank/blank.component";
import { ProfileComponent } from "./profile/profile.component";
const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "blank",
    component: BlankComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraPagesRoutingModule {}
