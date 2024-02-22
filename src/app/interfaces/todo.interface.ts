export interface Todo {
    id: string | number;
    description: string;
    status: TodoStatus;
    createdAt: string | Date;
    isChecked?: boolean;
  }
  
  export type TodoStatus = 'not-started' | 'in-progress' | 'finished';
  