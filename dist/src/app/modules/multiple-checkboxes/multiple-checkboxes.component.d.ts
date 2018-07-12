import { OnInit, EventEmitter } from '@angular/core';
export declare class MultipleCheckboxesComponent implements OnInit {
    private top;
    masterList: any;
    updatedList: EventEmitter<any>;
    updatedListWithFulldata: EventEmitter<any>;
    DisplayField: any;
    title: any;
    CollpseIcon: string;
    SearchText: any;
    selectedList: any;
    isSelectall: boolean;
    fulldatalist: any;
    private clicks;
    constructor();
    ngOnInit(): void;
    updateSelected(event: any, currentItem: any): void;
    toggeldiv(e: any): void;
    sortByChecked(field: string): any;
}
