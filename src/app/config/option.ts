import { TodoStatus } from './../interfaces/todo.interface';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: TodoStatus }[] = [
  { value: 'not-started', name: traductions['empty'] },
  { value: 'in-progress', name: traductions['in-progress'] },
  { value: 'finished', name: traductions['finished'] },
];
 
// export const filterOptions: { name: string; value: FilterStatus }[] = [
//   { value: 'all', name: traductions['all'] },
//   ...formOptions,
// ];

// export const orderOptions: { value: Orders; name: string }[] = [
//   {
//     value: 'newest',
//     name: 'Más Nueva a Más Vieja',
//   },
//   {
//     value: 'oldest',
//     name: 'Más Vieja a Más Nueva',
//   },
// ];