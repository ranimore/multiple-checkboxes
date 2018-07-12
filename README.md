# Install package from npm
 
 	npm install multiple-checkboxes
 
 # Include  module in app.module.ts file
 
 
 	import { MultipleCheckboxesModule } from 'multiple-checkboxes';
 
	ngModule({

  	declarations: [
 	   AppComponent
 	 ]
 	 ,
 	 imports:
 	 [
  	  BrowserModule,
  	  MultipleCheckboxesModule
 	 ],
  
 	 providers: [],
  
 	 bootstrap: [AppComponent]
	})
	export class AppModule { }

## Index.html

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


## html 

	 <app-multiple-checkboxes (updatedList)="selectedLocationList($event)" [masterList]="locations" [title]="'Locations'"
 	 [DisplayField]="'name'"></app-multiple-checkboxes>
  
 	 1. mastelist is input array
  
 	 2. title is title to show 
 
	 3. DisplayField is field you want to display as checkbox 
  
 	 4. updatedlist returns checked items from given list
  
 ## In .ts file 
 
 	 locations=[{id:1,name:"Pune"},{id:2,name:"Mumbai"},{id:3,name:"Delhi"},{id:4,name:"Goa"}];
  
  	selectedLocationList(list){
  
  	console.log(list)
  
 	 }
  
  
  
