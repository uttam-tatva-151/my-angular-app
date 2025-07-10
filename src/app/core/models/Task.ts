export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done';
  editing?: boolean; //  toggle edit mode
}
