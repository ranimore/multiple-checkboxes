import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  locations=[{id:1,name:"Pune"},{id:2,name:"Mumbai"},{id:3,name:"Delhi"},{id:4,name:"Goa"}];
  selectedLocationList(list){
    console.log(list)
  }
}
