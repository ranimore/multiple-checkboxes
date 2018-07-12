import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultipleCheckboxesModule } from './modules/multiple-checkboxes/multiple-checkboxes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultipleCheckboxesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
