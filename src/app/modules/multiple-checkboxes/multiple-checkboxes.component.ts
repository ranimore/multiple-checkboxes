import {Component,OnInit,Input,Output,EventEmitter,ViewChild, ElementRef} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject ,Observable} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-multiple-checkboxes',
  templateUrl: './multiple-checkboxes.component.html',
  styleUrls: ['./multiple-checkboxes.component.css']
})
export class MultipleCheckboxesComponent implements OnInit {
  @ViewChild('top') private top:ElementRef;
  @Input() masterList;
  @Output() updatedList = new EventEmitter < any > ();
  @Output() updatedListWithFulldata=new EventEmitter<any>();
  @Input() DisplayField;
  @Input() title;
  @Input() height?;
  CollpseIcon: string = '+';
  SearchText: any = '';
  selectedList: any = [];
  isSelectall:boolean=true;
  fulldatalist:any=[];
  private clicks = new Subject();

    constructor() {
 
  }

  ngOnInit() {
    this.clicks.pipe(
      debounceTime(500)
    ).subscribe(e => this.updatedList.emit(e));
     }
  updateSelected(event,currentItem) {
    
    // this.top.nativeElement.scrollTop=0;
    // top.scrollTop=0;
  //  top.scrollIntoView({ behavior: "smooth", block: "start" });
    // =0;
  //  window.scrollTo(0,0)
      if(event.target.value=='selectall'){
     
      this.masterList.forEach(element => {
        element.selected=true;
      });
        this.selectedList=this.masterList.map(item=>item[this.DisplayField]);
        this.clicks.next(this.selectedList)
        // this.updatedList.emit(this.selectedList);
      this.updatedListWithFulldata.emit(this.masterList);
      this.isSelectall=false;
    }
    else if(event.target.value=='unselectall'){

      this.masterList.forEach(element => {
        element.selected=false;
      });
      this.selectedList=[];
      this.clicks.next(this.selectedList)
      // this.updatedList.emit(this.selectedList);
          this.updatedListWithFulldata.emit([]);
      this.isSelectall=true;
    }
    else{
      if (event.target.checked) {
            this.selectedList.push(event.target.value);
        this.clicks.next(this.selectedList)
        // this.updatedList.emit(this.selectedList);
        this.fulldatalist.push(currentItem)
        this.updatedListWithFulldata.emit(this.fulldatalist);
      } else {
        this.selectedList.splice(this.selectedList.indexOf(event.target.value), 1);
        this.fulldatalist.splice(this.fulldatalist.indexOf(currentItem),1);
        this.clicks.next(this.selectedList)
        // this.updatedList.emit(this.selectedList);
        this.updatedListWithFulldata.emit(this.fulldatalist);
        
      }
    }
    
  }
  toggeldiv(e) {
    // var text=$(e.target).html()
    // $(e.target).html("+"+text)
    if (this.CollpseIcon == '-') this.CollpseIcon = '+'
    else this.CollpseIcon = '-'
    let cur = $(e.target).next()
    $(cur).collapse('toggle');
  }
  sortByChecked(field:string){
    let sorted = this.masterList.sort((a, b) => a[field] ? 1:( a[field]===b[field] ? 0 : -1));
    sorted.reverse();
    return sorted;
  }
}
