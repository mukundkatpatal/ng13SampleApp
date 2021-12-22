import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from 'components';
// import { FlareEditableGridModule } from 'dist/components/editable-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    // FlareEditableGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
