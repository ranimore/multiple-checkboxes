/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
export { MultipleCheckboxesComponent };
function MultipleCheckboxesComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.top;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.masterList;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.updatedList;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.updatedListWithFulldata;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.DisplayField;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.title;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.CollpseIcon;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.SearchText;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.selectedList;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.isSelectall;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.fulldatalist;
    /** @type {?} */
    MultipleCheckboxesComponent.prototype.clicks;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2hlY2tib3hlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tdWx0aXBsZS1jaGVja2JveGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL211bHRpcGxlLWNoZWNrYm94ZXMvbXVsdGlwbGUtY2hlY2tib3hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVEsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBYSxNQUFNLE1BQU0sQ0FBQzs7SUE0Q3RDOzJCQVhzQixJQUFJLFlBQVksRUFBVzt1Q0FDakIsSUFBSSxZQUFZLEVBQU87MkJBR25DLEdBQUc7MEJBQ1AsRUFBRTs0QkFDQSxFQUFFOzJCQUNGLElBQUk7NEJBQ1AsRUFBRTtzQkFDRixJQUFJLE9BQU8sRUFBRTtLQUk3Qjs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQUlJO1FBSEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7S0FDekM7Ozs7OztJQUNKLG9EQUFjOzs7OztJQUFkLFVBQWUsS0FBSyxFQUFDLFdBQVc7UUFBaEMsaUJBOENDOzs7Ozs7UUF2Q0csRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUUsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUVwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQzdCLE9B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SSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO1FBQzFGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7O2dCQTVHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLDRnREFxQkw7b0JBQ0wsTUFBTSxFQUFFLENBQUMscXVDQUFtdUMsQ0FBQztpQkFDOXVDOzs7OztzQkFFRSxTQUFTLFNBQUMsS0FBSzs2QkFDZixLQUFLOzhCQUNMLE1BQU07MENBQ04sTUFBTTsrQkFDTixLQUFLO3dCQUNMLEtBQUs7O3NDQXRDUjs7U0FnQ2EsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgLE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tdWx0aXBsZS1jaGVja2JveGVzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItcHJpbWFyeSBtYi0zXCIgPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGFjY29yZGlvbi10b2dnbGVcIiAoY2xpY2spPVwidG9nZ2VsZGl2KCRldmVudClcIj57e0NvbGxwc2VJY29ufX0gJm5ic3A7IHt7dGl0bGV9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNvbGxhcHNlXCIgaWQ9XCJzZWFyY2hkaXZcIiAjdG9wPlxuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiU2VhcmNoVGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLWJveFwiIGlkPVwic3R5bGUtMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIiAqbmdJZj1cImlzU2VsZWN0YWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAgdmFsdWU9XCJzZWxlY3RhbGxcIiAoY2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkKCRldmVudCwnJylcIj4gU2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0lmPVwiIWlzU2VsZWN0YWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ1bnNlbGVjdGFsbFwiIChjaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWQoJGV2ZW50LCcnKVwiPiBVbnNlbGVjdCBBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzb3J0QnlDaGVja2VkKCdzZWxlY3RlZCcpIHwgZmlsdGVyIDogU2VhcmNoVGV4dCA6RGlzcGxheUZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLnNlbGVjdGVkXCIgdmFsdWU9XCJ7e2l0ZW1bRGlzcGxheUZpZWxkXX19XCIgKGNoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZCgkZXZlbnQsaXRlbSlcIj4ge3tpdGVtW0Rpc3BsYXlGaWVsZF19fSA8c3BhbiAqbmdJZj1cIml0ZW0uY291bnRcIj4oe3tpdGVtLmNvdW50fHwwfX0pIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5jYXJkLWJveHtoZWlnaHQ6MTUwcHg7b3ZlcmZsb3cteTphdXRvfS5jYXJkLWhlYWRlcntjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOnNlYXJjaGZpZWxkLWNhbmNlbC1idXR0b259LmNoZWNrYm94LWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctbGVmdDoyMnB4O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uY2hlY2tib3gtY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDtjdXJzb3I6cG9pbnRlcn0uY2hlY2ttYXJre3Bvc2l0aW9uOmFic29sdXRlO3RvcDo0cHg7bGVmdDowO2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NlZDRkYn0uY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0fi5jaGVja21hcmt7YmFja2dyb3VuZC1jb2xvcjojY2NjfS5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJre2JhY2tncm91bmQtY29sb3I6IzIxOTZmM30uY2hlY2ttYXJrOmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5Om5vbmV9LmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXJ7ZGlzcGxheTpibG9ja30uY2hlY2tib3gtY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXJ7bGVmdDo0cHg7dG9wOjFweDt3aWR0aDo1cHg7aGVpZ2h0OjEwcHg7Ym9yZGVyOnNvbGlkICNmZmY7Ym9yZGVyLXdpZHRoOjAgM3B4IDNweCAwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Ojotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo1cHg7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntib3JkZXItcmFkaXVzOjJweDstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDZkYjh9Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3std2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fWBdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpcGxlQ2hlY2tib3hlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RvcCcpIHByaXZhdGUgdG9wOkVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG1hc3Rlckxpc3Q7XG4gIEBPdXRwdXQoKSB1cGRhdGVkTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIgPCBhbnkgPiAoKTtcbiAgQE91dHB1dCgpIHVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhPW5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBEaXNwbGF5RmllbGQ7XG4gIEBJbnB1dCgpIHRpdGxlO1xuICBDb2xscHNlSWNvbjogc3RyaW5nID0gJysnO1xuICBTZWFyY2hUZXh0OiBhbnkgPSAnJztcbiAgc2VsZWN0ZWRMaXN0OiBhbnkgPSBbXTtcbiAgaXNTZWxlY3RhbGw6Ym9vbGVhbj10cnVlO1xuICBmdWxsZGF0YWxpc3Q6YW55PVtdO1xuICBwcml2YXRlIGNsaWNrcyA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xpY2tzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxuICAgICkuc3Vic2NyaWJlKGUgPT4gdGhpcy51cGRhdGVkTGlzdC5lbWl0KGUpKTtcbiAgICAgfVxuICB1cGRhdGVTZWxlY3RlZChldmVudCxjdXJyZW50SXRlbSkge1xuICAgIFxuICAgIC8vIHRoaXMudG9wLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wPTA7XG4gICAgLy8gdG9wLnNjcm9sbFRvcD0wO1xuICAvLyAgdG9wLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgLy8gPTA7XG4gIC8vICB3aW5kb3cuc2Nyb2xsVG8oMCwwKVxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPT0nc2VsZWN0YWxsJyl7XG4gICAgIFxuICAgICAgdGhpcy5tYXN0ZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdD10aGlzLm1hc3Rlckxpc3QubWFwKGl0ZW09Pml0ZW1bdGhpcy5EaXNwbGF5RmllbGRdKTtcbiAgICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgIHRoaXMudXBkYXRlZExpc3RXaXRoRnVsbGRhdGEuZW1pdCh0aGlzLm1hc3Rlckxpc3QpO1xuICAgICAgdGhpcy5pc1NlbGVjdGFsbD1mYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZihldmVudC50YXJnZXQudmFsdWU9PSd1bnNlbGVjdGFsbCcpe1xuXG4gICAgICB0aGlzLm1hc3Rlckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zZWxlY3RlZD1mYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZExpc3Q9W107XG4gICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQoW10pO1xuICAgICAgdGhpcy5pc1NlbGVjdGFsbD10cnVlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuY2xpY2tzLm5leHQodGhpcy5zZWxlY3RlZExpc3QpXG4gICAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICAgIHRoaXMuZnVsbGRhdGFsaXN0LnB1c2goY3VycmVudEl0ZW0pXG4gICAgICAgIHRoaXMudXBkYXRlZExpc3RXaXRoRnVsbGRhdGEuZW1pdCh0aGlzLmZ1bGxkYXRhbGlzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdC5zcGxpY2UodGhpcy5zZWxlY3RlZExpc3QuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpLCAxKTtcbiAgICAgICAgdGhpcy5mdWxsZGF0YWxpc3Quc3BsaWNlKHRoaXMuZnVsbGRhdGFsaXN0LmluZGV4T2YoY3VycmVudEl0ZW0pLDEpO1xuICAgICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgICAvLyB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQodGhpcy5zZWxlY3RlZExpc3QpO1xuICAgICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQodGhpcy5mdWxsZGF0YWxpc3QpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiAgdG9nZ2VsZGl2KGUpIHtcbiAgICAvLyB2YXIgdGV4dD0kKGUudGFyZ2V0KS5odG1sKClcbiAgICAvLyAkKGUudGFyZ2V0KS5odG1sKFwiK1wiK3RleHQpXG4gICAgaWYgKHRoaXMuQ29sbHBzZUljb24gPT0gJy0nKSB0aGlzLkNvbGxwc2VJY29uID0gJysnXG4gICAgZWxzZSB0aGlzLkNvbGxwc2VJY29uID0gJy0nXG4gICAgbGV0IGN1ciA9ICQoZS50YXJnZXQpLm5leHQoKVxuICAgICQoY3VyKS5jb2xsYXBzZSgndG9nZ2xlJyk7XG4gIH1cbiAgc29ydEJ5Q2hlY2tlZChmaWVsZDpzdHJpbmcpe1xuICAgIGxldCBzb3J0ZWQgPSB0aGlzLm1hc3Rlckxpc3Quc29ydCgoYSwgYikgPT4gYVtmaWVsZF0gPyAxOiggYVtmaWVsZF09PT1iW2ZpZWxkXSA/IDAgOiAtMSkpO1xuICAgIHNvcnRlZC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHNvcnRlZDtcbiAgfVxufVxuIl19