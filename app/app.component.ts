import {Component} from 'angular2/core'; // <-- importing Component from core
import {jvComponent} from './model/jvclass'; // <-- importing custom component

@Component({
    selector: 'jv-app', //<----the element defined in the index.html
    //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
    templateUrl: 'app/view/template-demo1.html',
    styleUrls: ['../assets/css/style.css'] // <--- this component css only
})

export class AppComponent {
	public title:string = "JV";
	public jvClassProps:jvComponent; // <--- property "jvClassProps" type "jvComponent" (imported from jvclass.ts)

	constructor(){ // <--- default values for app launch
		this.jvClassProps = new jvComponent(2016, "This is a random text"); //jvComponent params = year, randomtext
		this.debug();
	}

	debug(){ //<--- method
		console.log(this.jvClassProps);
	}

} // <--- we need to export the class AppComponent. 
