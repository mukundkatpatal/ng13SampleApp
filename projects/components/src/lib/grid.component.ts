import { Component, OnInit, Input } from '@angular/core';
import { GridModel } from './grid.model';

@Component({
  selector: 'lib-grid',
  template: `
    <div style="border: 1px solid red">
      components works!
      {{innerModel.data[0]}}
      <div> Menus </div>
      <br />
      <ng-container *ngIf="innerModel?.columns?.menuItems">
        <lib-grid-context-menu [menuItems]="innerModel?.columns?.menuItems"></lib-grid-context-menu>
      </ng-container>
    </div>
  `,
  styles: [
  ]
})
export class GridComponent<M extends GridModel = GridModel> implements OnInit {

  public innerModel!: M;
  @Input()
  public set model(model: M) {
    this.innerModel = model;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.innerModel?.columns?.menuItems);
  }

}
