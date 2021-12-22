export interface ContextMenuItemModel {
  id: string;
  iconName: string;
  label: string;
  disabled?: boolean;
}

export type ContextMenu<T, D = any> = T[] | ((dataItem: D, rowIndex: number) => T[]);

export interface GridColumnSettingsModel {
  menuItems: ContextMenu<ContextMenuItemModel>;
}

export interface GridModel {
  columns: GridColumnSettingsModel;
  data: Array<any>;
}