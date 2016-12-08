import {Component} from 'angular2/core'; // <-- importing Component from core

@Component({
    selector: 'jv-app', //<----the element defined in the index.html
    //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
    templateUrl: 'app/view/template-demo1.html'
})

export class AppComponent {
	//properties
	public title:string = "JV";// <--- template value for {title}
	public year:number = 2016;

	constructor(){ // <--- default values fo app launch
		this.year = new Date().getFullYear();
		this.randomMethod();
	}

	randomMethod(){ //<--- 
		alert("Everything is fine in "+this.year);
	}

} // <--- we need to export the class AppComponent. 
