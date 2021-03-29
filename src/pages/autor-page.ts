import { inject } from "aurelia";
import { CgService } from "../services/cg-service";

//@inject()
export class AutorPage {
    autores;

    constructor(private cgService: CgService) {

    }

    binding() {
        return this.cgService.getAutores().then(_autores => {
            this.autores = _autores;

        })
    }

    delete(autor) {
        if (confirm(`Tem a certeza que quer apagar o autor "${autor.nome}"?`)) {
            this.cgService.deleteAutor(autor.id).then(() => {
                this.binding();
            })
        }

    }
}