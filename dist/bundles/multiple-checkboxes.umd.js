(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('rxjs'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('multiple-checkboxes', ['exports', '@angular/core', 'rxjs/operators', 'rxjs', '@angular/common', '@angular/forms'], factory) :
    (factory((global['multiple-checkboxes'] = {}),global.ng.core,global.rxjs.operators,global.rxjs,global.ng.common,global.ng.forms));
}(this, (function (exports,core,operators,rxjs,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MultipleCheckboxesComponent = (function () {
        function MultipleCheckboxesComponent() {
            this.updatedList = new core.EventEmitter();
            this.updatedListWithFulldata = new core.EventEmitter();
            this.CollpseIcon = '+';
            this.SearchText = '';
            this.selectedList = [];
            this.isSelectall = true;
            this.fulldatalist = [];
            this.clicks = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        MultipleCheckboxesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.clicks.pipe(operators.debounceTime(500)).subscribe(function (e) { return _this.updatedList.emit(e); });
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
            { type: core.Component, args: [{
                        selector: 'app-multiple-checkboxes',
                        template: "<div class=\"card border-primary mb-3\" >\n  <div class=\"card-header text-white bg-primary accordion-toggle\" (click)=\"toggeldiv($event)\">{{CollpseIcon}} &nbsp; {{title}}</div>\n  <div class=\"card-body collapse\" id=\"searchdiv\" #top>\n      <input [(ngModel)]=\"SearchText\" class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\">\n      <div class=\"card-text card-box\" id=\"style-1\" [style.height.px]=\"height\">\n          <div class=\"\" >\n                  <label class=\"checkbox-container\" *ngIf=\"isSelectall\">\n                          <input type=\"checkbox\"  value=\"selectall\" (change)=\"updateSelected($event,'')\"> Select All\n                          <span class=\"checkmark\"></span>\n                      </label>\n                      <label class=\"checkbox-container\" *ngIf=\"!isSelectall\">\n                              <input type=\"checkbox\" value=\"unselectall\" (change)=\"updateSelected($event,'')\"> Unselect All\n                              <span class=\"checkmark\"></span>\n                          </label>\n              <label class=\"checkbox-container\" *ngFor=\"let item of sortByChecked('selected') | filter : SearchText :DisplayField\">\n                  <input type=\"checkbox\" [(ngModel)]=\"item.selected\" value=\"{{item[DisplayField]}}\" (change)=\"updateSelected($event,item)\"> {{item[DisplayField]}} <span *ngIf=\"item.count\">({{item.count||0}}) </span>\n                  <span class=\"checkmark\"></span>\n              </label>\n          </div>\n      </div>\n  </div>\n</div>",
                        styles: [".card-box{overflow-y:auto}.card-header{cursor:pointer}input[type=search]::-webkit-search-cancel-button{-webkit-appearance:searchfield-cancel-button}.checkbox-container{display:block;position:relative;padding-left:22px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-container input{position:absolute;opacity:0;cursor:pointer}.checkmark{position:absolute;top:4px;left:0;height:15px;width:15px;background-color:#fff;border:1px solid #ced4db}.checkbox-container:hover input~.checkmark{background-color:#ccc}.checkbox-container input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar{width:5px;height:5px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:2px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#006db8}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}"]
                    },] },
        ];
        /** @nocollapse */
        MultipleCheckboxesComponent.ctorParameters = function () { return []; };
        MultipleCheckboxesComponent.propDecorators = {
            top: [{ type: core.ViewChild, args: ['top',] }],
            masterList: [{ type: core.Input }],
            updatedList: [{ type: core.Output }],
            updatedListWithFulldata: [{ type: core.Output }],
            DisplayField: [{ type: core.Input }],
            title: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return MultipleCheckboxesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FilterPipe = (function () {
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
            { type: core.Pipe, args: [{
                        name: 'filter'
                    },] },
        ];
        return FilterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MultipleCheckboxesModule = (function () {
        function MultipleCheckboxesModule() {
        }
        MultipleCheckboxesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
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

    exports.MultipleCheckboxesModule = MultipleCheckboxesModule;
    exports.ɵa = MultipleCheckboxesComponent;
    exports.ɵb = FilterPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2hlY2tib3hlcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL211bHRpcGxlLWNoZWNrYm94ZXMvc3JjL2FwcC9tb2R1bGVzL211bHRpcGxlLWNoZWNrYm94ZXMvbXVsdGlwbGUtY2hlY2tib3hlcy5jb21wb25lbnQudHMiLCJuZzovL211bHRpcGxlLWNoZWNrYm94ZXMvc3JjL2FwcC9tb2R1bGVzL3BpcGUvZmlsdGVyLnBpcGUudHMiLCJuZzovL211bHRpcGxlLWNoZWNrYm94ZXMvc3JjL2FwcC9tb2R1bGVzL211bHRpcGxlLWNoZWNrYm94ZXMvbXVsdGlwbGUtY2hlY2tib3hlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgLE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tdWx0aXBsZS1jaGVja2JveGVzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItcHJpbWFyeSBtYi0zXCIgPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGFjY29yZGlvbi10b2dnbGVcIiAoY2xpY2spPVwidG9nZ2VsZGl2KCRldmVudClcIj57e0NvbGxwc2VJY29ufX0gJm5ic3A7IHt7dGl0bGV9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNvbGxhcHNlXCIgaWQ9XCJzZWFyY2hkaXZcIiAjdG9wPlxuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiU2VhcmNoVGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLWJveFwiIGlkPVwic3R5bGUtMVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIlwiID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0lmPVwiaXNTZWxlY3RhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICB2YWx1ZT1cInNlbGVjdGFsbFwiIChjaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWQoJGV2ZW50LCcnKVwiPiBTZWxlY3QgQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCIgKm5nSWY9XCIhaXNTZWxlY3RhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVuc2VsZWN0YWxsXCIgKGNoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZCgkZXZlbnQsJycpXCI+IFVuc2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvcnRCeUNoZWNrZWQoJ3NlbGVjdGVkJykgfCBmaWx0ZXIgOiBTZWFyY2hUZXh0IDpEaXNwbGF5RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIiB2YWx1ZT1cInt7aXRlbVtEaXNwbGF5RmllbGRdfX1cIiAoY2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkKCRldmVudCxpdGVtKVwiPiB7e2l0ZW1bRGlzcGxheUZpZWxkXX19IDxzcGFuICpuZ0lmPVwiaXRlbS5jb3VudFwiPih7e2l0ZW0uY291bnR8fDB9fSkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmNhcmQtYm94e292ZXJmbG93LXk6YXV0b30uY2FyZC1oZWFkZXJ7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpzZWFyY2hmaWVsZC1jYW5jZWwtYnV0dG9ufS5jaGVja2JveC1jb250YWluZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MjJweDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjA7Y3Vyc29yOnBvaW50ZXJ9LmNoZWNrbWFya3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NHB4O2xlZnQ6MDtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGJ9LmNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dH4uY2hlY2ttYXJre2JhY2tncm91bmQtY29sb3I6I2NjY30uY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFya3tiYWNrZ3JvdW5kLWNvbG9yOiMyMTk2ZjN9LmNoZWNrbWFyazphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpub25lfS5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVye2Rpc3BsYXk6YmxvY2t9LmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVye2xlZnQ6NHB4O3RvcDoxcHg7d2lkdGg6NXB4O2hlaWdodDoxMHB4O2JvcmRlcjpzb2xpZCAjZmZmO2JvcmRlci13aWR0aDowIDNweCAzcHggMDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NXB4O2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7YmFja2dyb3VuZC1jb2xvcjojMDA2ZGI4fTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7Ym9yZGVyLXJhZGl1czoxMHB4O2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX1gXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZUNoZWNrYm94ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCd0b3AnKSBwcml2YXRlIHRvcDpFbGVtZW50UmVmO1xuICBASW5wdXQoKSBtYXN0ZXJMaXN0O1xuICBAT3V0cHV0KCkgdXBkYXRlZExpc3QgPSBuZXcgRXZlbnRFbWl0dGVyIDwgYW55ID4gKCk7XG4gIEBPdXRwdXQoKSB1cGRhdGVkTGlzdFdpdGhGdWxsZGF0YT1uZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgRGlzcGxheUZpZWxkO1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgaGVpZ2h0PztcbiAgQ29sbHBzZUljb246IHN0cmluZyA9ICcrJztcbiAgU2VhcmNoVGV4dDogYW55ID0gJyc7XG4gIHNlbGVjdGVkTGlzdDogYW55ID0gW107XG4gIGlzU2VsZWN0YWxsOmJvb2xlYW49dHJ1ZTtcbiAgZnVsbGRhdGFsaXN0OmFueT1bXTtcbiAgcHJpdmF0ZSBjbGlja3MgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsaWNrcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZShlID0+IHRoaXMudXBkYXRlZExpc3QuZW1pdChlKSk7XG4gICAgIH1cbiAgdXBkYXRlU2VsZWN0ZWQoZXZlbnQsY3VycmVudEl0ZW0pIHtcbiAgICBcbiAgICAvLyB0aGlzLnRvcC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcD0wO1xuICAgIC8vIHRvcC5zY3JvbGxUb3A9MDtcbiAgLy8gIHRvcC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgIC8vID0wO1xuICAvLyAgd2luZG93LnNjcm9sbFRvKDAsMClcbiAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZT09J3NlbGVjdGFsbCcpe1xuICAgICBcbiAgICAgIHRoaXMubWFzdGVyTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnNlbGVjdGVkPXRydWU7XG4gICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3Q9dGhpcy5tYXN0ZXJMaXN0Lm1hcChpdGVtPT5pdGVtW3RoaXMuRGlzcGxheUZpZWxkXSk7XG4gICAgICAgIHRoaXMuY2xpY2tzLm5leHQodGhpcy5zZWxlY3RlZExpc3QpXG4gICAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQodGhpcy5tYXN0ZXJMaXN0KTtcbiAgICAgIHRoaXMuaXNTZWxlY3RhbGw9ZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPT0ndW5zZWxlY3RhbGwnKXtcblxuICAgICAgdGhpcy5tYXN0ZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQ9ZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0PVtdO1xuICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVkTGlzdFdpdGhGdWxsZGF0YS5lbWl0KFtdKTtcbiAgICAgIHRoaXMuaXNTZWxlY3RhbGw9dHJ1ZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExpc3QucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgICAvLyB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQodGhpcy5zZWxlY3RlZExpc3QpO1xuICAgICAgICB0aGlzLmZ1bGxkYXRhbGlzdC5wdXNoKGN1cnJlbnRJdGVtKVxuICAgICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQodGhpcy5mdWxsZGF0YWxpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3Quc3BsaWNlKHRoaXMuc2VsZWN0ZWRMaXN0LmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgICAgIHRoaXMuZnVsbGRhdGFsaXN0LnNwbGljZSh0aGlzLmZ1bGxkYXRhbGlzdC5pbmRleE9mKGN1cnJlbnRJdGVtKSwxKTtcbiAgICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgICAgdGhpcy51cGRhdGVkTGlzdFdpdGhGdWxsZGF0YS5lbWl0KHRoaXMuZnVsbGRhdGFsaXN0KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4gIHRvZ2dlbGRpdihlKSB7XG4gICAgLy8gdmFyIHRleHQ9JChlLnRhcmdldCkuaHRtbCgpXG4gICAgLy8gJChlLnRhcmdldCkuaHRtbChcIitcIit0ZXh0KVxuICAgIGlmICh0aGlzLkNvbGxwc2VJY29uID09ICctJykgdGhpcy5Db2xscHNlSWNvbiA9ICcrJ1xuICAgIGVsc2UgdGhpcy5Db2xscHNlSWNvbiA9ICctJ1xuICAgIGxldCBjdXIgPSAkKGUudGFyZ2V0KS5uZXh0KClcbiAgICAkKGN1cikuY29sbGFwc2UoJ3RvZ2dsZScpO1xuICB9XG4gIHNvcnRCeUNoZWNrZWQoZmllbGQ6c3RyaW5nKXtcbiAgICBsZXQgc29ydGVkID0gdGhpcy5tYXN0ZXJMaXN0LnNvcnQoKGEsIGIpID0+IGFbZmllbGRdID8gMTooIGFbZmllbGRdPT09YltmaWVsZF0gPyAwIDogLTEpKTtcbiAgICBzb3J0ZWQucmV2ZXJzZSgpO1xuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdmaWx0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgc2VhcmNoVGV4dDogc3RyaW5nLGZpZWxkOnN0cmluZyk6IGFueVtdIHtcclxuICAgIGlmKCFpdGVtcykgcmV0dXJuIFtdO1xyXG4gICAgaWYoIXNlYXJjaFRleHQpIHJldHVybiBpdGVtcztcclxuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcclxuLy8gcmV0dXJuIGl0ZW1zLmZpbHRlciggaXQgPT4ge1xyXG4vLyAgICAgLy8gICByZXR1cm4gaXQuaW5jbHVkZXMoc2VhcmNoVGV4dCk7XHJcbiAgICBcclxuLy8gICAgIH0pO1xyXG5yZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbVtmaWVsZF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpICE9PSAtMSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTXVsdGlwbGVDaGVja2JveGVzQ29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aXBsZS1jaGVja2JveGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RmlsdGVyUGlwZX1mcm9tICcuLi9waXBlL2ZpbHRlci5waXBlJ1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNdWx0aXBsZUNoZWNrYm94ZXNDb21wb25lbnQsRmlsdGVyUGlwZV0sXG4gIGV4cG9ydHM6W011bHRpcGxlQ2hlY2tib3hlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVDaGVja2JveGVzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJkZWJvdW5jZVRpbWUiLCJDb21wb25lbnQiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk91dHB1dCIsIlBpcGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUErQ0k7K0JBWnNCLElBQUlBLGlCQUFZLEVBQVc7MkNBQ2pCLElBQUlBLGlCQUFZLEVBQU87K0JBSW5DLEdBQUc7OEJBQ1AsRUFBRTtnQ0FDQSxFQUFFOytCQUNGLElBQUk7Z0NBQ1AsRUFBRTswQkFDRixJQUFJQyxZQUFPLEVBQUU7U0FJN0I7Ozs7UUFFRCw4Q0FBUTs7O1lBQVI7Z0JBQUEsaUJBSUk7Z0JBSEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2RDLHNCQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ3pDOzs7Ozs7UUFDSixvREFBYzs7Ozs7WUFBZCxVQUFlLEtBQUssRUFBQyxXQUFXO2dCQUFoQyxpQkE4Q0M7Ozs7OztnQkF2Q0csSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBRSxXQUFXLEVBQUM7b0JBRW5DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFDN0IsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7cUJBQ3ZCLENBQUMsQ0FBQztvQkFDRCxJQUFJLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBQSxDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZ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