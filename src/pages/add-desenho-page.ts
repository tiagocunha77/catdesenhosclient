import { IRouter } from "aurelia";
import { ReadStream } from "fs";
import { Autor } from "../entities/autor";
import { Desenho } from "../entities/desenho";
import { CgService } from "../services/cg-service";

export class AddDesenhoPage {
    desenho: Desenho;
    autores: Autor[];

    constructor(private cgService: CgService, @IRouter private router: IRouter) {
        this.desenho = new Desenho();


    }
    save = () => {
        this.cgService.addDesenho(this.desenho).then(() => {
            this.router.load("desenho-page")
        })
        
    }
    binding() {
        return this.cgService.getAutores().then(_autores => {
            this.autores = _autores;

        })
    }
    fileSelected(_event) {
        let reader = new FileReader();
        let file = _event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            //@ts-ignore
            this.desenho.desenho = reader.result;
            
        };
    }
}