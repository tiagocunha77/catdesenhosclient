import { inject, IRouter } from "aurelia";
import { CgService } from "../services/cg-service";

//@inject()
export class LoginPage {
    
    formElem:HTMLFormElement;

    constructor(private cgService:CgService, @IRouter private router:IRouter) {
        
    }


    login = ()=>{

        let formData = new FormData(this.formElem);
        console.log("FORMADATA", formData, this.formElem);
        
        this.cgService.login(formData).then(_r=>{
            this.router.load("welcome-page");
        });

        return false;
    }
}