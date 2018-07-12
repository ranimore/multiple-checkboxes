import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string,field:string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
// return items.filter( it => {
//     //   return it.includes(searchText);
    
//     });
return items.filter(item => item[field].toLowerCase().indexOf(searchText) !== -1);
   }
}