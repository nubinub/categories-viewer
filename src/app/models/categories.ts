export interface ICategory {
  id: number;
  group?: IGroup;
  wording: string;
  description?: string;
}

export interface IGroup {
  id: number;
  name: string;
  color?: GroupColor;
}

export interface IVisibleCategory {
  id: number;
}

export type GroupColor = 'm-red' | 'm-pink' | 'm-yellow' | 'm-purple' | 'm-blue' | 'm-green';

export interface ICategoriesByGroup {
  group: IGroup;
  categories: ICategory[];
}
