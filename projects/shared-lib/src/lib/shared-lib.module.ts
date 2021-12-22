import { NgModule } from '@angular/core';
import { GridModule } from 'components';
import { SharedLibComponent } from './shared-lib.component';



@NgModule({
  declarations: [
    SharedLibComponent
  ],
  imports: [
    GridModule
  ],
  exports: [
    SharedLibComponent
  ]
})
export class SharedLibModule { }
