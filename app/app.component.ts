import {Component} from 'angular2/core'; // <-- importing Component from core
import {jvComponent} from './model/jvclass'; // <-- importing custom component

@Component({
    selector: 'jv-app', //<----the element defined in the index.html
    //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
    templateUrl: 'app/view/template-demo1.html',
    styleUrls: ['../assets/css/style.css'] // <--- this component css only
})

export class AppComponent {
	public title:string = 'JV';
	public jvClassProps:jvComponent; // <--- property 'jvClassProps' type 'jvComponent' (imported from jvclass.ts)

	public showData:boolean; // <-- to test ngif directive 

	public mylist:Array<jvComponent>; // <-- string array to test *ngFor

	constructor(){ // <--- default values for app launch
		this.showData = false; //change it to false to hide 'randomtext' in template-demo1

		this.jvClassProps = new jvComponent(2016, 'This is a random text'); //jvComponent params = year, randomtext
		
		this.mylist = [
			new jvComponent(2016, 'This is a random text 01'),
			new jvComponent(2015, 'This is a random text 02'),
			new jvComponent(2014, 'This is a random text 03'),
			new jvComponent(2013, 'This is a random text 04'),
			new jvComponent(2012, 'This is a random text 05'),
			new jvComponent(2011, 'This is a random text 06')
		];

		this.debug();
	}

	//methods
	debug(){
		console.log(this.jvClassProps);
	}

	displayData(val){
		this.showData = val;
	}

} // <--- we need to export the class AppComponent. 
