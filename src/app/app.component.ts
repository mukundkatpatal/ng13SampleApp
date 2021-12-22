import { Component } from '@angular/core';
import { GridModel } from 'components';
// import { EditableGridModel } from 'dist/components/editable-grid/editable-grid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng13SampleApp';

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

  // public editableModel: EditableGridModel = {
  //   columns: {
  //     menuItems: [{
  //       id: 'Id',
  //       iconName: 'IconName',
  //       label: 'Label 1',
  //       disabled :false
  //     },
  //     {
  //       id: 'Id2',
  //       iconName: 'IconName',
  //       label: 'Label 3',
  //       disabled :false
  //     }]
  //   }, data: ['Hey Hi']
  // }
}
