/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FilterPipe {
    /**
     * @param {?} items
     * @param {?} searchText
     * @param {?} field
     * @return {?}
     */
    transform(items, searchText, field) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        // return items.filter( it => {
        //     //   return it.includes(searchText);
        //     });
        return items.filter(item => item[field].toLowerCase().indexOf(searchText) !== -1);
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filter'
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tdWx0aXBsZS1jaGVja2JveGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL3BpcGUvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBELE1BQU07Ozs7Ozs7SUFDSixTQUFTLENBQUMsS0FBWSxFQUFFLFVBQWtCLEVBQUMsS0FBWTtRQUNyRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLFVBQVUsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7UUFLdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUU7OztZQWJILElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsUUFBUTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2ZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcsZmllbGQ6c3RyaW5nKTogYW55W10ge1xyXG4gICAgaWYoIWl0ZW1zKSByZXR1cm4gW107XHJcbiAgICBpZighc2VhcmNoVGV4dCkgcmV0dXJuIGl0ZW1zO1xyXG5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4vLyByZXR1cm4gaXRlbXMuZmlsdGVyKCBpdCA9PiB7XHJcbi8vICAgICAvLyAgIHJldHVybiBpdC5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcclxuICAgIFxyXG4vLyAgICAgfSk7XHJcbnJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtW2ZpZWxkXS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dCkgIT09IC0xKTtcclxuICAgfVxyXG59Il19