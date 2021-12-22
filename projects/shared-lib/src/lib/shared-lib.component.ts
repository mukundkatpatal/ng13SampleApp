import { Component, OnInit } from '@angular/core';
import { GridModel } from 'components';

@Component({
  selector: 'lib-shared-lib',
  template: `
    <p>
      shared-lib works!
      <lib-grid [model]="model"></lib-grid>
    </p>
  `,
  styles: [
  ]
})
export class SharedLibComponent implements OnInit {

  public model: GridModel = {
    columns: {
      menuItems: [{
        id: 'Id',
        iconName: 'IconName',
        label: 'Label 1',
        disabled :false
      },
      {
        id: 'Id2',
        iconName: 'IconName',
        label: 'Label 3',
        disabled :false
      }]
    }, data: ['Hey Hi']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
