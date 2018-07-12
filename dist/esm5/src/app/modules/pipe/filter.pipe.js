/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} searchText
     * @param {?} field
     * @return {?}
     */
    FilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} searchText
     * @param {?} field
     * @return {?}
     */
    function (items, searchText, field) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        // return items.filter( it => {
        //     //   return it.includes(searchText);
        //     });
        return items.filter(function (item) { return item[field].toLowerCase().indexOf(searchText) !== -1; });
    };
    FilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'filter'
                },] },
    ];
    return FilterPipe;
}());
export { FilterPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tdWx0aXBsZS1jaGVja2JveGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL3BpcGUvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lBS2xELDhCQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxVQUFrQixFQUFDLEtBQVk7UUFDckQsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7O1FBS3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO0tBQzlFOztnQkFiSCxJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7O3FCQUhEOztTQUlhLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpdGVtczogYW55W10sIHNlYXJjaFRleHQ6IHN0cmluZyxmaWVsZDpzdHJpbmcpOiBhbnlbXSB7XHJcbiAgICBpZighaXRlbXMpIHJldHVybiBbXTtcclxuICAgIGlmKCFzZWFyY2hUZXh0KSByZXR1cm4gaXRlbXM7XHJcbnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbi8vIHJldHVybiBpdGVtcy5maWx0ZXIoIGl0ID0+IHtcclxuLy8gICAgIC8vICAgcmV0dXJuIGl0LmluY2x1ZGVzKHNlYXJjaFRleHQpO1xyXG4gICAgXHJcbi8vICAgICB9KTtcclxucmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW1bZmllbGRdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSAhPT0gLTEpO1xyXG4gICB9XHJcbn0iXX0=