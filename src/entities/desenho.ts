import { Autor } from "./autor";

export class Desenho{
    id:number;
    titulo:string;
    observacoes:string;
    desenho:string;
    autor?:Autor[];
}