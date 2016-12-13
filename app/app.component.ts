import {Component} from 'angular2/core'; // <-- importing Component from core
import {jvComponent} from './model/jvclass'; // <-- importing custom component

import{JaviService} from './services/javi.service'; // <-- import service

@Component({
    selector: 'jv-app', //<----the element defined in the index.html
    //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
    templateUrl: 'app/view/template-demo1.html',
    styleUrls: ['../assets/css/style.css'], // <--- this component css only
    providers: [JaviService] // <-- array with all the services that will use this component
})

//main Component
export class AppComponent {
	public title:string = 'JV';
	public jvClassProps:jvComponent; // <--- property 'jvClassProps' type 'jvComponent' (imported from jvclass.ts)

	public showData:boolean; // <-- to test ngif directive 

	public dataService:any; // <-- to store later whatever the method returns
	public dataServiceArray:Array<jvComponent>; // <-- to store later whatever the method returns

	//default values for app launch
	constructor(private _javiService:JaviService){ // <--- private attr to allow access to my custom service 
		
		this.dataService = this._javiService.getJaviDemo(); // <-- store service data method results
		console.log(this.dataService);

		this.showData = false; //change it to false to hide 'randomtext' in template-demo1

		this.jvClassProps = new jvComponent(2016, 'This is a random text'); //jvComponent params = year, randomtext
		this.debug();		
		
		this.dataServiceArray = this._javiService.getJaviDemoArray();
	}

	//methods
	debug(){
		console.log(this.jvClassProps);
	}

	//function used in other templates, for example displayData() is being called in template-demo1.html
	displayData(val){
		this.showData = val;
	}

	editRandomText(newText){
		console.log(newText);
		this.jvClassProps = newText; // <-- get clicked item text and update input value with it
	}

} // <--- we need to export the class AppComponent. 
