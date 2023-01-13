export interface Button {
  name: string;
  disabled?: boolean;
  title?: string;
  type?: string;
  hidden?: boolean;
  class?: string;
}

export interface Message{
  id?:string|number
  name: string,
  message :string,
  date:string
}
export interface ViewOptions {
  sortField: string;
  sortDirection: string;
  page?: number;
  pageSize?: number;
}
