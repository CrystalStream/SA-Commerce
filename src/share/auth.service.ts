import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;

    credencialesStorage: any = {
        email: 'x@x.com',
        password: '123'
    }

    constructor(private router: Router) {
    }

    login(crendenciales): void {

        if (crendenciales.email === this.credencialesStorage.email && 
            crendenciales.password === this.credencialesStorage.password) {

            this.isLoggedIn = true;
            console.log('Logeado');
            this.router.navigate(['/home']);       
        } else {
            console.log('Credenciales incorrectas');
        }

    }

    logout () {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);       
    }

    estaLogeado() {
        if(this.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}