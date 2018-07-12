import { Component, Input, Output, EventEmitter, ViewChild, Pipe, NgModule } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MultipleCheckboxesComponent = /** @class */ (function () {
    function MultipleCheckboxesComponent() {
        this.updatedList = new EventEmitter();
        this.updatedListWithFulldata = new EventEmitter();
        this.CollpseIcon = '+';
        this.SearchText = '';
        this.selectedList = [];
        this.isSelectall = true;
        this.fulldatalist = [];
        this.clicks = new Subject();
    }
    /**
     * @return {?}
     */
    MultipleCheckboxesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clicks.pipe(debounceTime(500)).subscribe(function (e) { return _this.updatedList.emit(e); });
    };
    /**
     * @param {?} event
     * @param {?} currentItem
     * @return {?}
     */
    MultipleCheckboxesComponent.prototype.updateSelected = /**
     * @param {?} event
     * @param {?} currentItem
     * @return {?}
     */
    function (event, currentItem) {
        var _this = this;
        // this.top.nativeElement.scrollTop=0;
        // top.scrollTop=0;
        //  top.scrollIntoView({ behavior: "smooth", block: "start" });
        // =0;
        //  window.scrollTo(0,0)
        if (event.target.value == 'selectall') {
            this.masterList.forEach(function (element) {
                element.selected = true;
            });
            this.selectedList = this.masterList.map(function (item) { return item[_this.DisplayField]; });
            this.clicks.next(this.selectedList);
            // this.updatedList.emit(this.selectedList);
            this.updatedListWithFulldata.emit(this.masterList);
            this.isSelectall = false;
        }
        else if (event.target.value == 'unselectall') {
            this.masterList.forEach(function (element) {
                element.selected = false;
            });
            this.selectedList = [];
            this.clicks.next(this.selectedList);
            // this.updatedList.emit(this.selectedList);
            this.updatedListWithFulldata.emit([]);
            this.isSelectall = true;
        }
        else {
            if (event.target.checked) {
                this.selectedList.push(event.target.value);
                this.clicks.next(this.selectedList);
                // this.updatedList.emit(this.selectedList);
                this.fulldatalist.push(currentItem);
                this.updatedListWithFulldata.emit(this.fulldatalist);
            }
            else {
                this.selectedList.splice(this.selectedList.indexOf(event.target.value), 1);
                this.fulldatalist.splice(this.fulldatalist.indexOf(currentItem), 1);
                this.clicks.next(this.selectedList);
                // this.updatedList.emit(this.selectedList);
                this.updatedListWithFulldata.emit(this.fulldatalist);
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MultipleCheckboxesComponent.prototype.toggeldiv = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // var text=$(e.target).html()
        // $(e.target).html("+"+text)
        if (this.CollpseIcon == '-')
            this.CollpseIcon = '+';
        else
            this.CollpseIcon = '-';
        var /** @type {?} */ cur = $(e.target).next();
        $(cur).collapse('toggle');
    };
    /**
     * @param {?} field
     * @return {?}
     */
    MultipleCheckboxesComponent.prototype.sortByChecked = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var /** @type {?} */ sorted = this.masterList.sort(function (a, b) { return a[field] ? 1 : (a[field] === b[field] ? 0 : -1); });
        sorted.reverse();
        return sorted;
    };
    MultipleCheckboxesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-multiple-checkboxes',
                    template: "<div class=\"card border-primary mb-3\" >\n  <div class=\"card-header text-white bg-primary accordion-toggle\" (click)=\"toggeldiv($event)\">{{CollpseIcon}} &nbsp; {{title}}</div>\n  <div class=\"card-body collapse\" id=\"searchdiv\" #top>\n      <input [(ngModel)]=\"SearchText\" class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\">\n      <div class=\"card-text card-box\" id=\"style-1\">\n          <div class=\"\" >\n                  <label class=\"checkbox-container\" *ngIf=\"isSelectall\">\n                          <input type=\"checkbox\"  value=\"selectall\" (change)=\"updateSelected($event,'')\"> Select All\n                          <span class=\"checkmark\"></span>\n                      </label>\n                      <label class=\"checkbox-container\" *ngIf=\"!isSelectall\">\n                              <input type=\"checkbox\" value=\"unselectall\" (change)=\"updateSelected($event,'')\"> Unselect All\n                              <span class=\"checkmark\"></span>\n                          </label>\n              <label class=\"checkbox-container\" *ngFor=\"let item of sortByChecked('selected') | filter : SearchText :DisplayField\">\n                  <input type=\"checkbox\" [(ngModel)]=\"item.selected\" value=\"{{item[DisplayField]}}\" (change)=\"updateSelected($event,item)\"> {{item[DisplayField]}} <span *ngIf=\"item.count\">({{item.count||0}}) </span>\n                  <span class=\"checkmark\"></span>\n              </label>\n          </div>\n      </div>\n  </div>\n</div>",
                    styles: [".card-box{height:150px;overflow-y:auto}.card-header{cursor:pointer}input[type=search]::-webkit-search-cancel-button{-webkit-appearance:searchfield-cancel-button}.checkbox-container{display:block;position:relative;padding-left:22px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-container input{position:absolute;opacity:0;cursor:pointer}.checkmark{position:absolute;top:4px;left:0;height:15px;width:15px;background-color:#fff;border:1px solid #ced4db}.checkbox-container:hover input~.checkmark{background-color:#ccc}.checkbox-container input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar{width:5px;height:5px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:2px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#006db8}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}"]
                },] },
    ];
    /** @nocollapse */
    MultipleCheckboxesComponent.ctorParameters = function () { return []; };
    MultipleCheckboxesComponent.propDecorators = {
        top: [{ type: ViewChild, args: ['top',] }],
        masterList: [{ type: Input }],
        updatedList: [{ type: Output }],
        updatedListWithFulldata: [{ type: Output }],
        DisplayField: [{ type: Input }],
        title: [{ type: Input }]
    };
    return MultipleCheckboxesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MultipleCheckboxesModule = /** @class */ (function () {
    function MultipleCheckboxesModule() {
    }
    MultipleCheckboxesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [MultipleCheckboxesComponent, FilterPipe],
                    exports: [MultipleCheckboxesComponent]
                },] },
    ];
    return MultipleCheckboxesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MultipleCheckboxesModule, MultipleCheckboxesComponent as ɵa, FilterPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2hlY2tib3hlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXVsdGlwbGUtY2hlY2tib3hlcy9zcmMvYXBwL21vZHVsZXMvbXVsdGlwbGUtY2hlY2tib3hlcy9tdWx0aXBsZS1jaGVja2JveGVzLmNvbXBvbmVudC50cyIsIm5nOi8vbXVsdGlwbGUtY2hlY2tib3hlcy9zcmMvYXBwL21vZHVsZXMvcGlwZS9maWx0ZXIucGlwZS50cyIsIm5nOi8vbXVsdGlwbGUtY2hlY2tib3hlcy9zcmMvYXBwL21vZHVsZXMvbXVsdGlwbGUtY2hlY2tib3hlcy9tdWx0aXBsZS1jaGVja2JveGVzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCAsT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW11bHRpcGxlLWNoZWNrYm94ZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjYXJkIGJvcmRlci1wcmltYXJ5IG1iLTNcIiA+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgYWNjb3JkaW9uLXRvZ2dsZVwiIChjbGljayk9XCJ0b2dnZWxkaXYoJGV2ZW50KVwiPnt7Q29sbHBzZUljb259fSAmbmJzcDsge3t0aXRsZX19PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY29sbGFwc2VcIiBpZD1cInNlYXJjaGRpdlwiICN0b3A+XG4gICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJTZWFyY2hUZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0IGNhcmQtYm94XCIgaWQ9XCJzdHlsZS0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIlwiID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0lmPVwiaXNTZWxlY3RhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICB2YWx1ZT1cInNlbGVjdGFsbFwiIChjaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWQoJGV2ZW50LCcnKVwiPiBTZWxlY3QgQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCIgKm5nSWY9XCIhaXNTZWxlY3RhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVuc2VsZWN0YWxsXCIgKGNoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZCgkZXZlbnQsJycpXCI+IFVuc2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvcnRCeUNoZWNrZWQoJ3NlbGVjdGVkJykgfCBmaWx0ZXIgOiBTZWFyY2hUZXh0IDpEaXNwbGF5RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIiB2YWx1ZT1cInt7aXRlbVtEaXNwbGF5RmllbGRdfX1cIiAoY2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkKCRldmVudCxpdGVtKVwiPiB7e2l0ZW1bRGlzcGxheUZpZWxkXX19IDxzcGFuICpuZ0lmPVwiaXRlbS5jb3VudFwiPih7e2l0ZW0uY291bnR8fDB9fSkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmNhcmQtYm94e2hlaWdodDoxNTBweDtvdmVyZmxvdy15OmF1dG99LmNhcmQtaGVhZGVye2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6c2VhcmNoZmllbGQtY2FuY2VsLWJ1dHRvbn0uY2hlY2tib3gtY29udGFpbmVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjIycHg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5jaGVja2JveC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowO2N1cnNvcjpwb2ludGVyfS5jaGVja21hcmt7cG9zaXRpb246YWJzb2x1dGU7dG9wOjRweDtsZWZ0OjA7aGVpZ2h0OjE1cHg7d2lkdGg6MTVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2VkNGRifS5jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXR+LmNoZWNrbWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNjY2N9LmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmt7YmFja2dyb3VuZC1jb2xvcjojMjE5NmYzfS5jaGVja21hcms6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6bm9uZX0uY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlcntkaXNwbGF5OmJsb2NrfS5jaGVja2JveC1jb250YWluZXIgLmNoZWNrbWFyazphZnRlcntsZWZ0OjRweDt0b3A6MXB4O3dpZHRoOjVweDtoZWlnaHQ6MTBweDtib3JkZXI6c29saWQgI2ZmZjtib3JkZXItd2lkdGg6MCAzcHggM3B4IDA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX06Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjVweDtoZWlnaHQ6NXB4O2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX06Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO2JhY2tncm91bmQtY29sb3I6IzAwNmRiOH06Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrey13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9YF1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVDaGVja2JveGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndG9wJykgcHJpdmF0ZSB0b3A6RWxlbWVudFJlZjtcbiAgQElucHV0KCkgbWFzdGVyTGlzdDtcbiAgQE91dHB1dCgpIHVwZGF0ZWRMaXN0ID0gbmV3IEV2ZW50RW1pdHRlciA8IGFueSA+ICgpO1xuICBAT3V0cHV0KCkgdXBkYXRlZExpc3RXaXRoRnVsbGRhdGE9bmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIERpc3BsYXlGaWVsZDtcbiAgQElucHV0KCkgdGl0bGU7XG4gIENvbGxwc2VJY29uOiBzdHJpbmcgPSAnKyc7XG4gIFNlYXJjaFRleHQ6IGFueSA9ICcnO1xuICBzZWxlY3RlZExpc3Q6IGFueSA9IFtdO1xuICBpc1NlbGVjdGFsbDpib29sZWFuPXRydWU7XG4gIGZ1bGxkYXRhbGlzdDphbnk9W107XG4gIHByaXZhdGUgY2xpY2tzID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbGlja3MucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUoZSA9PiB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQoZSkpO1xuICAgICB9XG4gIHVwZGF0ZVNlbGVjdGVkKGV2ZW50LGN1cnJlbnRJdGVtKSB7XG4gICAgXG4gICAgLy8gdGhpcy50b3AubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A9MDtcbiAgICAvLyB0b3Auc2Nyb2xsVG9wPTA7XG4gIC8vICB0b3Auc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAvLyA9MDtcbiAgLy8gIHdpbmRvdy5zY3JvbGxUbygwLDApXG4gICAgICBpZihldmVudC50YXJnZXQudmFsdWU9PSdzZWxlY3RhbGwnKXtcbiAgICAgXG4gICAgICB0aGlzLm1hc3Rlckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zZWxlY3RlZD10cnVlO1xuICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0PXRoaXMubWFzdGVyTGlzdC5tYXAoaXRlbT0+aXRlbVt0aGlzLkRpc3BsYXlGaWVsZF0pO1xuICAgICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgICAvLyB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQodGhpcy5zZWxlY3RlZExpc3QpO1xuICAgICAgdGhpcy51cGRhdGVkTGlzdFdpdGhGdWxsZGF0YS5lbWl0KHRoaXMubWFzdGVyTGlzdCk7XG4gICAgICB0aGlzLmlzU2VsZWN0YWxsPWZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC52YWx1ZT09J3Vuc2VsZWN0YWxsJyl7XG5cbiAgICAgIHRoaXMubWFzdGVyTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnNlbGVjdGVkPWZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTGlzdD1bXTtcbiAgICAgIHRoaXMuY2xpY2tzLm5leHQodGhpcy5zZWxlY3RlZExpc3QpXG4gICAgICAvLyB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQodGhpcy5zZWxlY3RlZExpc3QpO1xuICAgICAgICAgIHRoaXMudXBkYXRlZExpc3RXaXRoRnVsbGRhdGEuZW1pdChbXSk7XG4gICAgICB0aGlzLmlzU2VsZWN0YWxsPXRydWU7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgICAgdGhpcy5mdWxsZGF0YWxpc3QucHVzaChjdXJyZW50SXRlbSlcbiAgICAgICAgdGhpcy51cGRhdGVkTGlzdFdpdGhGdWxsZGF0YS5lbWl0KHRoaXMuZnVsbGRhdGFsaXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0LnNwbGljZSh0aGlzLnNlbGVjdGVkTGlzdC5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSksIDEpO1xuICAgICAgICB0aGlzLmZ1bGxkYXRhbGlzdC5zcGxpY2UodGhpcy5mdWxsZGF0YWxpc3QuaW5kZXhPZihjdXJyZW50SXRlbSksMSk7XG4gICAgICAgIHRoaXMuY2xpY2tzLm5leHQodGhpcy5zZWxlY3RlZExpc3QpXG4gICAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICAgIHRoaXMudXBkYXRlZExpc3RXaXRoRnVsbGRhdGEuZW1pdCh0aGlzLmZ1bGxkYXRhbGlzdCk7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICB0b2dnZWxkaXYoZSkge1xuICAgIC8vIHZhciB0ZXh0PSQoZS50YXJnZXQpLmh0bWwoKVxuICAgIC8vICQoZS50YXJnZXQpLmh0bWwoXCIrXCIrdGV4dClcbiAgICBpZiAodGhpcy5Db2xscHNlSWNvbiA9PSAnLScpIHRoaXMuQ29sbHBzZUljb24gPSAnKydcbiAgICBlbHNlIHRoaXMuQ29sbHBzZUljb24gPSAnLSdcbiAgICBsZXQgY3VyID0gJChlLnRhcmdldCkubmV4dCgpXG4gICAgJChjdXIpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbiAgfVxuICBzb3J0QnlDaGVja2VkKGZpZWxkOnN0cmluZyl7XG4gICAgbGV0IHNvcnRlZCA9IHRoaXMubWFzdGVyTGlzdC5zb3J0KChhLCBiKSA9PiBhW2ZpZWxkXSA/IDE6KCBhW2ZpZWxkXT09PWJbZmllbGRdID8gMCA6IC0xKSk7XG4gICAgc29ydGVkLnJldmVyc2UoKTtcbiAgICByZXR1cm4gc29ydGVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpdGVtczogYW55W10sIHNlYXJjaFRleHQ6IHN0cmluZyxmaWVsZDpzdHJpbmcpOiBhbnlbXSB7XHJcbiAgICBpZighaXRlbXMpIHJldHVybiBbXTtcclxuICAgIGlmKCFzZWFyY2hUZXh0KSByZXR1cm4gaXRlbXM7XHJcbnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbi8vIHJldHVybiBpdGVtcy5maWx0ZXIoIGl0ID0+IHtcclxuLy8gICAgIC8vICAgcmV0dXJuIGl0LmluY2x1ZGVzKHNlYXJjaFRleHQpO1xyXG4gICAgXHJcbi8vICAgICB9KTtcclxucmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW1bZmllbGRdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSAhPT0gLTEpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE11bHRpcGxlQ2hlY2tib3hlc0NvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtY2hlY2tib3hlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ZpbHRlclBpcGV9ZnJvbSAnLi4vcGlwZS9maWx0ZXIucGlwZSdcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTXVsdGlwbGVDaGVja2JveGVzQ29tcG9uZW50LEZpbHRlclBpcGVdLFxuICBleHBvcnRzOltNdWx0aXBsZUNoZWNrYm94ZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpcGxlQ2hlY2tib3hlc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUE4Q0k7MkJBWHNCLElBQUksWUFBWSxFQUFXO3VDQUNqQixJQUFJLFlBQVksRUFBTzsyQkFHbkMsR0FBRzswQkFDUCxFQUFFOzRCQUNBLEVBQUU7MkJBQ0YsSUFBSTs0QkFDUCxFQUFFO3NCQUNGLElBQUksT0FBTyxFQUFFO0tBSTdCOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBSUk7UUFIRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ3pDOzs7Ozs7SUFDSixvREFBYzs7Ozs7SUFBZCxVQUFlLEtBQUssRUFBQyxXQUFXO1FBQWhDLGlCQThDQzs7Ozs7O1FBdkNHLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUUsV0FBVyxFQUFDO1lBRW5DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDN0IsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7YUFDdkIsQ0FBQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTs7WUFFckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBQyxLQUFLLENBQUM7U0FDeEI7YUFDSSxJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFFLGFBQWEsRUFBQztZQUV4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQzdCLE9BQU8sQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO2FBQ3hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTs7WUFFL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQztTQUN2QjthQUNHO1lBQ0YsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBOztnQkFFbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ25DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7O2dCQUVuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUV0RDtTQUNGO0tBRUY7Ozs7O0lBQ0QsK0NBQVM7Ozs7SUFBVCxVQUFVLENBQUM7OztRQUdULElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUE7O1lBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFBO1FBQzNCLHFCQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0I7Ozs7O0lBQ0QsbURBQWE7Ozs7SUFBYixVQUFjLEtBQVk7UUFDeEIscUJBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDMUYsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7O2dCQTVHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLDRnREFxQkw7b0JBQ0wsTUFBTSxFQUFFLENBQUMscXVDQUFtdUMsQ0FBQztpQkFDOXVDOzs7OztzQkFFRSxTQUFTLFNBQUMsS0FBSzs2QkFDZixLQUFLOzhCQUNMLE1BQU07MENBQ04sTUFBTTsrQkFDTixLQUFLO3dCQUNMLEtBQUs7O3NDQXRDUjs7Ozs7OztBQ0FBOzs7Ozs7Ozs7SUFLRSw4QkFBUzs7Ozs7O0lBQVQsVUFBVSxLQUFZLEVBQUUsVUFBa0IsRUFBQyxLQUFZO1FBQ3JELElBQUcsQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBRyxDQUFDLFVBQVU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7O1FBS3RDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQzlFOztnQkFiSCxJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7O3FCQUhEOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUMsVUFBVSxDQUFDO29CQUN0RCxPQUFPLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdEM7O21DQVpEOzs7Ozs7Ozs7Ozs7Ozs7In0=