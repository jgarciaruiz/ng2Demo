import {Injectable} from "angular2/core"; // <--- to allow injection of this service in other components
import {DEMODATA} from "./jvcontentdemo"; // <--- to import const with demo data from external file

@Injectable()
export class JaviService{
	
	//JaviService methods:

	getJaviDemo(){
		return "Returned string via getJaviDemo() method from JaviService service.";
	}

	getJaviDemoArray(){
		return DEMODATA;
	}

}