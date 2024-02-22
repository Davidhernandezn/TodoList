import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  /**Evaluar texto ingresado con los valores de la tabla */
  transform(value: any[], searchText: string): any[] {
    if (!searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();
    /**Devuelve el filtro de la tabla con lo ingresado */
    return value.filter((todo) =>
      todo.description.toLowerCase().includes(searchText)
    );
  }
}
