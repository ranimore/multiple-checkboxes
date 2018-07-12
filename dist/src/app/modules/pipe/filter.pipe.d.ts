import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, field: string): any[];
}
