import { IRouter } from "aurelia";
import { Autor } from "../entities/autor";
import { Desenho } from "../entities/desenho";
import { CgService } from "../services/cg-service";

export class AddAutorPage {
    autor: Autor;
    

    constructor(private cgService:CgService, @IRouter private router:IRouter){
        this.autor=new Autor();
    }

    save=()=>{
        this.cgService.addAutor(this.autor).then(()=>{
            this.router.load("autor-page")
        })
    }



}