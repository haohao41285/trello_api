import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrellosComponent } from './trellos.component';
import { TrellosRoutingModule } from './trellos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [TrellosComponent, ListComponent],
  imports: [
    CommonModule,
    TrellosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TrellosModule { }
