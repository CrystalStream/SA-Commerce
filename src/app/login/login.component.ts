import { AuthService } from './../../share/auth.service';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';


@Component({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {


    @ViewChild('loginForm')
    loginForm: NgForm;

    constructor(private authService: AuthService) {

    }

    onSubmit() {

        console.log('this.loginFormt', this.loginForm);
        const login = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        };

        this.authService.login(login);

    }

}