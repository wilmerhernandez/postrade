import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { BlankComponent } from './blank/blank.component';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [ProfileComponent, BlankComponent],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class ExtraPagesModule {}
