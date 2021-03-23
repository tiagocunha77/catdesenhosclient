import { CgService } from "../services/cg-service";

export class DesenhoPage {

    desenhos;
    constructor(private cgService: CgService) {

    }
    binding(){
        return this.cgService.getDesenhos().then(_desenhos => {
            this.desenhos=_desenhos;
        })
    }
}