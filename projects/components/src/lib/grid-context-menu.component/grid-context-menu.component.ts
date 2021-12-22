import { Component, OnInit, Input } from '@angular/core';
import {  ContextMenu } from '../grid.model';

@Component({
  selector: 'lib-grid-context-menu',
  templateUrl: './grid-context-menu.component.html',
})
export class GridContextMenu<M extends import('../grid.model').ContextMenuItemModel, D = any> implements OnInit {

  @Input()
  public menuItems?: ContextMenu<M, D>;

  public context?: { dataItem: D; rowIndex: number };

  constructor() { }

  ngOnInit(): void {
  }

  public get menuOptions(): M[] {
    if (this.menuItems instanceof Function) {
      return this.context
        ? this.menuItems(this.context.dataItem, this.context.rowIndex)
        : [];
    }

    return this.menuItems ?? [];
  }

}
