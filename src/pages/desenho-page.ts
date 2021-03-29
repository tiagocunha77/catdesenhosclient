import { CgService } from "../services/cg-service";

export class DesenhoPage {

    desenhos;
    constructor(private cgService: CgService) {

    }
    binding() {
        return this.cgService.getDesenhos().then(_desenhos => {
            this.desenhos = _desenhos;
        })
    }

    delete(desenhos) {
        if (confirm(`TEm a certeza que quer apagar o desenho "${desenhos.titulo}"`)) {
            this.cgService.deleteDesenho(desenhos.id).then(() => {
                this.binding();
            })
        }
    }
}