import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { GridContextMenu } from './grid-context-menu.component/grid-context-menu.component';



@NgModule({
  declarations: [
    GridComponent,
    GridContextMenu,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent,
    GridContextMenu
  ]
})
export class GridModule { }
