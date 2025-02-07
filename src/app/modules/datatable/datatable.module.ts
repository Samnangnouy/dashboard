import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableRoutingModule } from './datatable-routing.module';
import { DatatableComponent } from './components/datatable/datatable.component';


@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    DatatableRoutingModule
  ]
})
export class DatatableModule { }
