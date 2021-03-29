import { CgService } from "../services/cg-service";

export class CgNavbar{

    constructor(private cgService:CgService){

    }


    logout(){
        this.cgService.logout();
    }

}