import { TodoStatus } from './../interfaces/todo.interface';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: TodoStatus }[] = [
  { value: 'not-started', name: traductions['empty'] },
  { value: 'in-progress', name: traductions['in-progress'] },
  { value: 'finished', name: traductions['finished'] },
];
 