export interface Todo {
    id: string | number;
    description: string;
    status: TodoStatus;
    createdAt: string | Date;
  }
  
  export type TodoStatus = 'not-started' | 'in-progress' | 'finished';
  
//   export type FilterStatus = TodoStatus | 'all'
  
//   export type Orders = 'newest' | 'oldest'