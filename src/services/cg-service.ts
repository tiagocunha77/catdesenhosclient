import { IRouter, Router } from "aurelia";
import { LoginPage } from "../pages/login-page";

export class CgService {
    host = 'http://localhost:8080';
    username = 'tiago';
    password = '123456';

    constructor(@IRouter private router:IRouter) {

    }


    makeRequest = (url: string, method: string = "GET", body?: BodyInit): Promise<any> => {

        //let headers = new Headers();

        //headers.append('Content-Type', 'text/json');
        //headers.set('Authorization', 'Basic ' + btoa(username + ":" + password))

        return fetch(this.host + url, {
            method: method,
            //headers: headers,
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

        return this.makeRequest('/login','POST', formData)
    }

    getAutores = () => {
        return this.makeRequest("/autor")
    }


    getDesenhos = () => {
        return this.makeRequest("/desenhos")
    }

}