import { IRouter, json } from "aurelia";
import { Autor } from "../entities/autor";
import { Desenho } from "../entities/desenho";

export class CgService {
   
    estaAutenticado=false;

    host = 'http://localhost:8080';
    

    constructor(@IRouter private router: IRouter) {

    }


    makeRequest = (url: string, method: string = "GET", body?: BodyInit): Promise<any> => {

        let headers = undefined;

        if (body instanceof FormData) {
            console.info("teste", body)
        } else {
            headers= new Headers()
            headers.append('Content-Type', 'application/json');
        }

        return fetch(this.host + url, {
            method: method,
            headers: headers,
            credentials: "include",
            body: body
        })
            .then(response => {
                if (response.redirected && response.url.includes("/login")) {
                    console.info("router", this.router);
                    this.router.load('login-page');
                }

                return response.json()
            }).catch(erro => {
                console.error("deu erro", erro)
            })

    }


    login(formData) {

        return this.makeRequest('/login', 'POST', formData).then(_r=>{
            this.estaAutenticado=true;
            return _r;
        })
    }

    logout() {
        return this.makeRequest('/logout').then(_r=>{
            this.estaAutenticado=false;
            return _r;
        })
    }

    getAutores = () => {
        return this.makeRequest("/autor")
    }

    addAutor = (autor: Autor) => {
        return this.makeRequest("/autor", "POST", json(autor))
    }


    getDesenhos = () => {
        return this.makeRequest("/desenhos")
    }


    addDesenho = (desenho: Desenho) => {
        return this.makeRequest("/desenhos", "POST", json(desenho))
    }

    deleteAutor = (id) => {
        return this.makeRequest("/autor/" + id, "DELETE")
    }

    deleteDesenho = (iddesenho) => {
        return this.makeRequest("/desenhos/" + iddesenho, "DELETE")
    }


}