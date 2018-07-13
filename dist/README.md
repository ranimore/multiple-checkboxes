# multiple-checkboxes
   Give the input array of object to show as checkboxes.This package returns checked items list and sorts list by checked items also provides filtering feature.
## Install package from npm
 
 	npm install multiple-checkboxes
## Include  module in app.module.ts file
 
 ```TypeScript
import { MultipleCheckboxesModule } from 'multiple-checkboxes';
ngModule({
   declarations: [AppComponent],
   imports:[BrowserModule, MultipleCheckboxesModule],
   providers: [],
   bootstrap: [AppComponent]
})
	export class AppModule { }
```
## Index.html
```HTML
<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
</head>
<body>
 	 <app-root></app-root>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</body>
</html>
```

## component.html 
```HTML
<!-- if want to get selected/checked list as string array -->
	 <app-multiple-checkboxes (updatedList)="selectedLocationList($event)" [masterList]="locations" [title]="'Locations'"
 	 [DisplayField]="'name'"></app-multiple-checkboxes>

<!-- if want to get selected/checked list full json object array -->

<app-multiple-checkboxes (updatedListWithFulldata)="selectedLocationList($event)" [masterList]="locations" [title]="'Locations'"
 	 [DisplayField]="'name'"></app-multiple-checkboxes>

```  
1. **masterList** is input array
2. **title** is title to show 
3. **DisplayField** is field you want to display as checkbox 
4. **updatedlist** returns checked items as string from given list
5. **updatedListWithFulldata** returns checked items as json object from given list
  
 ## In component.ts file 
 ```TypeScript
locations=[{id:1,name:"Pune"},{id:2,name:"Mumbai"},{id:3,name:"Delhi"},{id:4,name:"Goa"}];
 selectedLocationList(list){
 console.log(list)
  //if Pune and Goa is selected
  //output will be ["Pune","Goa"]   if updatedlist event used
  //output will be [{id:1,name:"Pune"},{id:4,name:"Goa"}] if updatedListWithFulldata event used
 }
  ```
  
  
