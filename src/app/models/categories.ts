export interface ICategory {
  id: number;
  group?: {
    id: number;
    name: string;
    color?: GroupColor;
  };
  wording: string;
  description?: string;
}

export interface IVisibleCategory {
  id: number;
}

export type GroupColor = 'm-red' | 'm-pink' | 'm-yellow' | 'm-purple' | 'm-blue' | 'm-green';
