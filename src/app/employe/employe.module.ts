import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe/employe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';
import { FormDialogComponent } from './employe/dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './employe/dialogs/delete/delete.component';
import { AdvanceTableService } from 'app/advance-table/advance-table.service';



@NgModule({
  declarations: [
    EmployeComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [AdvanceTableService],
})
export class EmployeModule { }
