/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class MultipleCheckboxesComponent {
    constructor() {
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
    ngOnInit() {
        this.clicks.pipe(debounceTime(500)).subscribe(e => this.updatedList.emit(e));
    }
    /**
     * @param {?} event
     * @param {?} currentItem
     * @return {?}
     */
    updateSelected(event, currentItem) {
        // this.top.nativeElement.scrollTop=0;
        // top.scrollTop=0;
        //  top.scrollIntoView({ behavior: "smooth", block: "start" });
        // =0;
        //  window.scrollTo(0,0)
        if (event.target.value == 'selectall') {
            this.masterList.forEach(element => {
                element.selected = true;
            });
            this.selectedList = this.masterList.map(item => item[this.DisplayField]);
            this.clicks.next(this.selectedList);
            // this.updatedList.emit(this.selectedList);
            this.updatedListWithFulldata.emit(this.masterList);
            this.isSelectall = false;
        }
        else if (event.target.value == 'unselectall') {
            this.masterList.forEach(element => {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    toggeldiv(e) {
        // var text=$(e.target).html()
        // $(e.target).html("+"+text)
        if (this.CollpseIcon == '-')
            this.CollpseIcon = '+';
        else
            this.CollpseIcon = '-';
        let /** @type {?} */ cur = $(e.target).next();
        $(cur).collapse('toggle');
    }
    /**
     * @param {?} field
     * @return {?}
     */
    sortByChecked(field) {
        let /** @type {?} */ sorted = this.masterList.sort((a, b) => a[field] ? 1 : (a[field] === b[field] ? 0 : -1));
        sorted.reverse();
        return sorted;
    }
}
MultipleCheckboxesComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-multiple-checkboxes',
                template: `<div class="card border-primary mb-3" >
  <div class="card-header text-white bg-primary accordion-toggle" (click)="toggeldiv($event)">{{CollpseIcon}} &nbsp; {{title}}</div>
  <div class="card-body collapse" id="searchdiv" #top>
      <input [(ngModel)]="SearchText" class="form-control form-control-sm" type="search" placeholder="Search">
      <div class="card-text card-box" id="style-1" [style.height.px]="height">
          <div class="" >
                  <label class="checkbox-container" *ngIf="isSelectall">
                          <input type="checkbox"  value="selectall" (change)="updateSelected($event,'')"> Select All
                          <span class="checkmark"></span>
                      </label>
                      <label class="checkbox-container" *ngIf="!isSelectall">
                              <input type="checkbox" value="unselectall" (change)="updateSelected($event,'')"> Unselect All
                              <span class="checkmark"></span>
                          </label>
              <label class="checkbox-container" *ngFor="let item of sortByChecked('selected') | filter : SearchText :DisplayField">
                  <input type="checkbox" [(ngModel)]="item.selected" value="{{item[DisplayField]}}" (change)="updateSelected($event,item)"> {{item[DisplayField]}} <span *ngIf="item.count">({{item.count||0}}) </span>
                  <span class="checkmark"></span>
              </label>
          </div>
      </div>
  </div>
</div>`,
                styles: [`.card-box{overflow-y:auto}.card-header{cursor:pointer}input[type=search]::-webkit-search-cancel-button{-webkit-appearance:searchfield-cancel-button}.checkbox-container{display:block;position:relative;padding-left:22px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-container input{position:absolute;opacity:0;cursor:pointer}.checkmark{position:absolute;top:4px;left:0;height:15px;width:15px;background-color:#fff;border:1px solid #ced4db}.checkbox-container:hover input~.checkmark{background-color:#ccc}.checkbox-container input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:"";position:absolute;display:none}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar{width:5px;height:5px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:2px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#006db8}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}`]
            },] },
];
/** @nocollapse */
MultipleCheckboxesComponent.ctorParameters = () => [];
MultipleCheckboxesComponent.propDecorators = {
    top: [{ type: ViewChild, args: ['top',] }],
    masterList: [{ type: Input }],
    updatedList: [{ type: Output }],
    updatedListWithFulldata: [{ type: Output }],
    DisplayField: [{ type: Input }],
    title: [{ type: Input }],
    height: [{ type: Input }]
};
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
    MultipleCheckboxesComponent.prototype.height;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2hlY2tib3hlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tdWx0aXBsZS1jaGVja2JveGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL211bHRpcGxlLWNoZWNrYm94ZXMvbXVsdGlwbGUtY2hlY2tib3hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVEsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBYSxNQUFNLE1BQU0sQ0FBQztBQThCMUMsTUFBTTtJQWVGOzJCQVpzQixJQUFJLFlBQVksRUFBVzt1Q0FDakIsSUFBSSxZQUFZLEVBQU87MkJBSW5DLEdBQUc7MEJBQ1AsRUFBRTs0QkFDQSxFQUFFOzJCQUNGLElBQUk7NEJBQ1AsRUFBRTtzQkFDRixJQUFJLE9BQU8sRUFBRTtLQUk3Qjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qzs7Ozs7O0lBQ0osY0FBYyxDQUFDLEtBQUssRUFBQyxXQUFXOzs7Ozs7UUFPNUIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUUsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUVwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7YUFDdkIsQ0FBQyxD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QyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQkw7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsc3RDQUFzdEMsQ0FBQzthQUNqdUM7Ozs7O2tCQUVFLFNBQVMsU0FBQyxLQUFLO3lCQUNmLEtBQUs7MEJBQ0wsTUFBTTtzQ0FDTixNQUFNOzJCQUNOLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgLE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tdWx0aXBsZS1jaGVja2JveGVzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItcHJpbWFyeSBtYi0zXCIgPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGFjY29yZGlvbi10b2dnbGVcIiAoY2xpY2spPVwidG9nZ2VsZGl2KCRldmVudClcIj57e0NvbGxwc2VJY29ufX0gJm5ic3A7IHt7dGl0bGV9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNvbGxhcHNlXCIgaWQ9XCJzZWFyY2hkaXZcIiAjdG9wPlxuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiU2VhcmNoVGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLWJveFwiIGlkPVwic3R5bGUtMVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIlwiID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0lmPVwiaXNTZWxlY3RhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICB2YWx1ZT1cInNlbGVjdGFsbFwiIChjaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWQoJGV2ZW50LCcnKVwiPiBTZWxlY3QgQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCIgKm5nSWY9XCIhaXNTZWxlY3RhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVuc2VsZWN0YWxsXCIgKGNoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZCgkZXZlbnQsJycpXCI+IFVuc2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvcnRCeUNoZWNrZWQoJ3NlbGVjdGVkJykgfCBmaWx0ZXIgOiBTZWFyY2hUZXh0IDpEaXNwbGF5RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIiB2YWx1ZT1cInt7aXRlbVtEaXNwbGF5RmllbGRdfX1cIiAoY2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkKCRldmVudCxpdGVtKVwiPiB7e2l0ZW1bRGlzcGxheUZpZWxkXX19IDxzcGFuICpuZ0lmPVwiaXRlbS5jb3VudFwiPih7e2l0ZW0uY291bnR8fDB9fSkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmNhcmQtYm94e292ZXJmbG93LXk6YXV0b30uY2FyZC1oZWFkZXJ7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpzZWFyY2hmaWVsZC1jYW5jZWwtYnV0dG9ufS5jaGVja2JveC1jb250YWluZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MjJweDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjA7Y3Vyc29yOnBvaW50ZXJ9LmNoZWNrbWFya3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NHB4O2xlZnQ6MDtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGJ9LmNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dH4uY2hlY2ttYXJre2JhY2tncm91bmQtY29sb3I6I2NjY30uY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFya3tiYWNrZ3JvdW5kLWNvbG9yOiMyMTk2ZjN9LmNoZWNrbWFyazphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpub25lfS5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVye2Rpc3BsYXk6YmxvY2t9LmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVye2xlZnQ6NHB4O3RvcDoxcHg7d2lkdGg6NXB4O2hlaWdodDoxMHB4O2JvcmRlcjpzb2xpZCAjZmZmO2JvcmRlci13aWR0aDowIDNweCAzcHggMDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NXB4O2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7YmFja2dyb3VuZC1jb2xvcjojMDA2ZGI4fTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7Ym9yZGVyLXJhZGl1czoxMHB4O2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX1gXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZUNoZWNrYm94ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCd0b3AnKSBwcml2YXRlIHRvcDpFbGVtZW50UmVmO1xuICBASW5wdXQoKSBtYXN0ZXJMaXN0O1xuICBAT3V0cHV0KCkgdXBkYXRlZExpc3QgPSBuZXcgRXZlbnRFbWl0dGVyIDwgYW55ID4gKCk7XG4gIEBPdXRwdXQoKSB1cGRhdGVkTGlzdFdpdGhGdWxsZGF0YT1uZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgRGlzcGxheUZpZWxkO1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgaGVpZ2h0PztcbiAgQ29sbHBzZUljb246IHN0cmluZyA9ICcrJztcbiAgU2VhcmNoVGV4dDogYW55ID0gJyc7XG4gIHNlbGVjdGVkTGlzdDogYW55ID0gW107XG4gIGlzU2VsZWN0YWxsOmJvb2xlYW49dHJ1ZTtcbiAgZnVsbGRhdGFsaXN0OmFueT1bXTtcbiAgcHJpdmF0ZSBjbGlja3MgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsaWNrcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZShlID0+IHRoaXMudXBkYXRlZExpc3QuZW1pdChlKSk7XG4gICAgIH1cbiAgdXBkYXRlU2VsZWN0ZWQoZXZlbnQsY3VycmVudEl0ZW0pIHtcbiAgICBcbiAgICAvLyB0aGlzLnRvcC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcD0wO1xuICAgIC8vIHRvcC5zY3JvbGxUb3A9MDtcbiAgLy8gIHRvcC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICAgIC8vID0wO1xuICAvLyAgd2luZG93LnNjcm9sbFRvKDAsMClcbiAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZT09J3NlbGVjdGFsbCcpe1xuICAgICBcbiAgICAgIHRoaXMubWFzdGVyTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnNlbGVjdGVkPXRydWU7XG4gICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3Q9dGhpcy5tYXN0ZXJMaXN0Lm1hcChpdGVtPT5pdGVtW3RoaXMuRGlzcGxheUZpZWxkXSk7XG4gICAgICAgIHRoaXMuY2xpY2tzLm5leHQodGhpcy5zZWxlY3RlZExpc3QpXG4gICAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQodGhpcy5tYXN0ZXJMaXN0KTtcbiAgICAgIHRoaXMuaXNTZWxlY3RhbGw9ZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPT0ndW5zZWxlY3RhbGwnKXtcblxuICAgICAgdGhpcy5tYXN0ZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQ9ZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0PVtdO1xuICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVkTGlzdFdpdGhGdWxsZGF0YS5lbWl0KFtdKTtcbiAgICAgIHRoaXMuaXNTZWxlY3RhbGw9dHJ1ZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExpc3QucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgICAvLyB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQodGhpcy5zZWxlY3RlZExpc3QpO1xuICAgICAgICB0aGlzLmZ1bGxkYXRhbGlzdC5wdXNoKGN1cnJlbnRJdGVtKVxuICAgICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQodGhpcy5mdWxsZGF0YWxpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3Quc3BsaWNlKHRoaXMuc2VsZWN0ZWRMaXN0LmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgICAgIHRoaXMuZnVsbGRhdGFsaXN0LnNwbGljZSh0aGlzLmZ1bGxkYXRhbGlzdC5pbmRleE9mKGN1cnJlbnRJdGVtKSwxKTtcbiAgICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgICAgdGhpcy51cGRhdGVkTGlzdFdpdGhGdWxsZGF0YS5lbWl0KHRoaXMuZnVsbGRhdGFsaXN0KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4gIHRvZ2dlbGRpdihlKSB7XG4gICAgLy8gdmFyIHRleHQ9JChlLnRhcmdldCkuaHRtbCgpXG4gICAgLy8gJChlLnRhcmdldCkuaHRtbChcIitcIit0ZXh0KVxuICAgIGlmICh0aGlzLkNvbGxwc2VJY29uID09ICctJykgdGhpcy5Db2xscHNlSWNvbiA9ICcrJ1xuICAgIGVsc2UgdGhpcy5Db2xscHNlSWNvbiA9ICctJ1xuICAgIGxldCBjdXIgPSAkKGUudGFyZ2V0KS5uZXh0KClcbiAgICAkKGN1cikuY29sbGFwc2UoJ3RvZ2dsZScpO1xuICB9XG4gIHNvcnRCeUNoZWNrZWQoZmllbGQ6c3RyaW5nKXtcbiAgICBsZXQgc29ydGVkID0gdGhpcy5tYXN0ZXJMaXN0LnNvcnQoKGEsIGIpID0+IGFbZmllbGRdID8gMTooIGFbZmllbGRdPT09YltmaWVsZF0gPyAwIDogLTEpKTtcbiAgICBzb3J0ZWQucmV2ZXJzZSgpO1xuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH1cbn1cbiJdfQ==