import { ProductosService } from './productos.service';
import { ProductosInterface } from './productos.interface';

import { Component, OnInit } from '@angular/core';




@Component({
    selector: 'productos-app',
    templateUrl: 'productos.component.html',
    styleUrls: ['productos.component.css']
})
export class ProductosComponent implements OnInit {


    productos: ProductosInterface[];


    constructor(private productosService: ProductosService) {


    }

    ngOnInit() {

        console.log('this.productosService.all()', this.productosService.all());
        this.productos = this.productosService.all();
    }

    
}