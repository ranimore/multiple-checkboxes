import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleCheckboxesComponent } from './multiple-checkboxes.component';
import { FormsModule } from '@angular/forms';
import {FilterPipe}from '../pipe/filter.pipe'
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MultipleCheckboxesComponent,FilterPipe],
  exports:[MultipleCheckboxesComponent]
})
export class MultipleCheckboxesModule { }
