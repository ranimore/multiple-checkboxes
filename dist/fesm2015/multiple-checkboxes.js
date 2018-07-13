import { Component, Input, Output, EventEmitter, ViewChild, Pipe, NgModule } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MultipleCheckboxesComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilterPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MultipleCheckboxesModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MultipleCheckboxesModule, MultipleCheckboxesComponent as ɵa, FilterPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2hlY2tib3hlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXVsdGlwbGUtY2hlY2tib3hlcy9zcmMvYXBwL21vZHVsZXMvbXVsdGlwbGUtY2hlY2tib3hlcy9tdWx0aXBsZS1jaGVja2JveGVzLmNvbXBvbmVudC50cyIsIm5nOi8vbXVsdGlwbGUtY2hlY2tib3hlcy9zcmMvYXBwL21vZHVsZXMvcGlwZS9maWx0ZXIucGlwZS50cyIsIm5nOi8vbXVsdGlwbGUtY2hlY2tib3hlcy9zcmMvYXBwL21vZHVsZXMvbXVsdGlwbGUtY2hlY2tib3hlcy9tdWx0aXBsZS1jaGVja2JveGVzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCAsT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW11bHRpcGxlLWNoZWNrYm94ZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjYXJkIGJvcmRlci1wcmltYXJ5IG1iLTNcIiA+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgYWNjb3JkaW9uLXRvZ2dsZVwiIChjbGljayk9XCJ0b2dnZWxkaXYoJGV2ZW50KVwiPnt7Q29sbHBzZUljb259fSAmbmJzcDsge3t0aXRsZX19PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY29sbGFwc2VcIiBpZD1cInNlYXJjaGRpdlwiICN0b3A+XG4gICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJTZWFyY2hUZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0IGNhcmQtYm94XCIgaWQ9XCJzdHlsZS0xXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCIgKm5nSWY9XCJpc1NlbGVjdGFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIHZhbHVlPVwic2VsZWN0YWxsXCIgKGNoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZCgkZXZlbnQsJycpXCI+IFNlbGVjdCBBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIiAqbmdJZj1cIiFpc1NlbGVjdGFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwidW5zZWxlY3RhbGxcIiAoY2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkKCRldmVudCwnJylcIj4gVW5zZWxlY3QgQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc29ydEJ5Q2hlY2tlZCgnc2VsZWN0ZWQnKSB8IGZpbHRlciA6IFNlYXJjaFRleHQgOkRpc3BsYXlGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiaXRlbS5zZWxlY3RlZFwiIHZhbHVlPVwie3tpdGVtW0Rpc3BsYXlGaWVsZF19fVwiIChjaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWQoJGV2ZW50LGl0ZW0pXCI+IHt7aXRlbVtEaXNwbGF5RmllbGRdfX0gPHNwYW4gKm5nSWY9XCJpdGVtLmNvdW50XCI+KHt7aXRlbS5jb3VudHx8MH19KSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuY2FyZC1ib3h7b3ZlcmZsb3cteTphdXRvfS5jYXJkLWhlYWRlcntjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOnNlYXJjaGZpZWxkLWNhbmNlbC1idXR0b259LmNoZWNrYm94LWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctbGVmdDoyMnB4O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uY2hlY2tib3gtY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDtjdXJzb3I6cG9pbnRlcn0uY2hlY2ttYXJre3Bvc2l0aW9uOmFic29sdXRlO3RvcDo0cHg7bGVmdDowO2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NlZDRkYn0uY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0fi5jaGVja21hcmt7YmFja2dyb3VuZC1jb2xvcjojY2NjfS5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJre2JhY2tncm91bmQtY29sb3I6IzIxOTZmM30uY2hlY2ttYXJrOmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5Om5vbmV9LmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXJ7ZGlzcGxheTpibG9ja30uY2hlY2tib3gtY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXJ7bGVmdDo0cHg7dG9wOjFweDt3aWR0aDo1cHg7aGVpZ2h0OjEwcHg7Ym9yZGVyOnNvbGlkICNmZmY7Ym9yZGVyLXdpZHRoOjAgM3B4IDNweCAwOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Ojotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo1cHg7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntib3JkZXItcmFkaXVzOjJweDstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDZkYjh9Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3std2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fWBdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpcGxlQ2hlY2tib3hlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RvcCcpIHByaXZhdGUgdG9wOkVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG1hc3Rlckxpc3Q7XG4gIEBPdXRwdXQoKSB1cGRhdGVkTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIgPCBhbnkgPiAoKTtcbiAgQE91dHB1dCgpIHVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhPW5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBEaXNwbGF5RmllbGQ7XG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSBoZWlnaHQ/O1xuICBDb2xscHNlSWNvbjogc3RyaW5nID0gJysnO1xuICBTZWFyY2hUZXh0OiBhbnkgPSAnJztcbiAgc2VsZWN0ZWRMaXN0OiBhbnkgPSBbXTtcbiAgaXNTZWxlY3RhbGw6Ym9vbGVhbj10cnVlO1xuICBmdWxsZGF0YWxpc3Q6YW55PVtdO1xuICBwcml2YXRlIGNsaWNrcyA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xpY2tzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxuICAgICkuc3Vic2NyaWJlKGUgPT4gdGhpcy51cGRhdGVkTGlzdC5lbWl0KGUpKTtcbiAgICAgfVxuICB1cGRhdGVTZWxlY3RlZChldmVudCxjdXJyZW50SXRlbSkge1xuICAgIFxuICAgIC8vIHRoaXMudG9wLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wPTA7XG4gICAgLy8gdG9wLnNjcm9sbFRvcD0wO1xuICAvLyAgdG9wLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgLy8gPTA7XG4gIC8vICB3aW5kb3cuc2Nyb2xsVG8oMCwwKVxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPT0nc2VsZWN0YWxsJyl7XG4gICAgIFxuICAgICAgdGhpcy5tYXN0ZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdD10aGlzLm1hc3Rlckxpc3QubWFwKGl0ZW09Pml0ZW1bdGhpcy5EaXNwbGF5RmllbGRdKTtcbiAgICAgICAgdGhpcy5jbGlja3MubmV4dCh0aGlzLnNlbGVjdGVkTGlzdClcbiAgICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgIHRoaXMudXBkYXRlZExpc3RXaXRoRnVsbGRhdGEuZW1pdCh0aGlzLm1hc3Rlckxpc3QpO1xuICAgICAgdGhpcy5pc1NlbGVjdGFsbD1mYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZihldmVudC50YXJnZXQudmFsdWU9PSd1bnNlbGVjdGFsbCcpe1xuXG4gICAgICB0aGlzLm1hc3Rlckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zZWxlY3RlZD1mYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZExpc3Q9W107XG4gICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgLy8gdGhpcy51cGRhdGVkTGlzdC5lbWl0KHRoaXMuc2VsZWN0ZWRMaXN0KTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQoW10pO1xuICAgICAgdGhpcy5pc1NlbGVjdGFsbD10cnVlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuY2xpY2tzLm5leHQodGhpcy5zZWxlY3RlZExpc3QpXG4gICAgICAgIC8vIHRoaXMudXBkYXRlZExpc3QuZW1pdCh0aGlzLnNlbGVjdGVkTGlzdCk7XG4gICAgICAgIHRoaXMuZnVsbGRhdGFsaXN0LnB1c2goY3VycmVudEl0ZW0pXG4gICAgICAgIHRoaXMudXBkYXRlZExpc3RXaXRoRnVsbGRhdGEuZW1pdCh0aGlzLmZ1bGxkYXRhbGlzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdC5zcGxpY2UodGhpcy5zZWxlY3RlZExpc3QuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpLCAxKTtcbiAgICAgICAgdGhpcy5mdWxsZGF0YWxpc3Quc3BsaWNlKHRoaXMuZnVsbGRhdGFsaXN0LmluZGV4T2YoY3VycmVudEl0ZW0pLDEpO1xuICAgICAgICB0aGlzLmNsaWNrcy5uZXh0KHRoaXMuc2VsZWN0ZWRMaXN0KVxuICAgICAgICAvLyB0aGlzLnVwZGF0ZWRMaXN0LmVtaXQodGhpcy5zZWxlY3RlZExpc3QpO1xuICAgICAgICB0aGlzLnVwZGF0ZWRMaXN0V2l0aEZ1bGxkYXRhLmVtaXQodGhpcy5mdWxsZGF0YWxpc3QpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiAgdG9nZ2VsZGl2KGUpIHtcbiAgICAvLyB2YXIgdGV4dD0kKGUudGFyZ2V0KS5odG1sKClcbiAgICAvLyAkKGUudGFyZ2V0KS5odG1sKFwiK1wiK3RleHQpXG4gICAgaWYgKHRoaXMuQ29sbHBzZUljb24gPT0gJy0nKSB0aGlzLkNvbGxwc2VJY29uID0gJysnXG4gICAgZWxzZSB0aGlzLkNvbGxwc2VJY29uID0gJy0nXG4gICAgbGV0IGN1ciA9ICQoZS50YXJnZXQpLm5leHQoKVxuICAgICQoY3VyKS5jb2xsYXBzZSgndG9nZ2xlJyk7XG4gIH1cbiAgc29ydEJ5Q2hlY2tlZChmaWVsZDpzdHJpbmcpe1xuICAgIGxldCBzb3J0ZWQgPSB0aGlzLm1hc3Rlckxpc3Quc29ydCgoYSwgYikgPT4gYVtmaWVsZF0gPyAxOiggYVtmaWVsZF09PT1iW2ZpZWxkXSA/IDAgOiAtMSkpO1xuICAgIHNvcnRlZC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHNvcnRlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2ZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcsZmllbGQ6c3RyaW5nKTogYW55W10ge1xyXG4gICAgaWYoIWl0ZW1zKSByZXR1cm4gW107XHJcbiAgICBpZighc2VhcmNoVGV4dCkgcmV0dXJuIGl0ZW1zO1xyXG5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4vLyByZXR1cm4gaXRlbXMuZmlsdGVyKCBpdCA9PiB7XHJcbi8vICAgICAvLyAgIHJldHVybiBpdC5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcclxuICAgIFxyXG4vLyAgICAgfSk7XHJcbnJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtW2ZpZWxkXS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dCkgIT09IC0xKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNdWx0aXBsZUNoZWNrYm94ZXNDb21wb25lbnQgfSBmcm9tICcuL211bHRpcGxlLWNoZWNrYm94ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGaWx0ZXJQaXBlfWZyb20gJy4uL3BpcGUvZmlsdGVyLnBpcGUnXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW011bHRpcGxlQ2hlY2tib3hlc0NvbXBvbmVudCxGaWx0ZXJQaXBlXSxcbiAgZXhwb3J0czpbTXVsdGlwbGVDaGVja2JveGVzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZUNoZWNrYm94ZXNNb2R1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