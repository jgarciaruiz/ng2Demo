import {Injectable} from "angular2/core"; // <--- to allow injection of this service in other components

@Injectable()
export class JaviService{
	
	getJaviDemo(){
		return "Returned string via getJaviDemo() method from JaviService service.";
	}

}