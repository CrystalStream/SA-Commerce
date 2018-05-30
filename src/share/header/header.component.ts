import { AuthService } from './../auth.service';
import { Component } from '@angular/core';



@Component({
    selector: 'header-app',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    constructor(private authService: AuthService) {



    }

    logout() {
        this.authService.logout();
    }


    
}