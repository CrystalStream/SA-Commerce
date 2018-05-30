import { ProductosInterface } from './productos.interface';
import { Injectable } from '@angular/core';





@Injectable()
export class ProductosService {


    productos: ProductosInterface[];


    constructor() {

        this.productos = [
            {
                idproducto: 1,
                nombre: 'Chamarra',
                precio: 123.45,
                cantidad: 50,
                descripcion: 'Chamarra de moda',
                foto: 'https://www.happychefuniforms.com/media/wysiwyg/a-spot-refresh/Tshirts-CatBanner-d.jpg.pagespeed.ce.5PvM04DRt6.jpg'
            },
            {
                idproducto: 1,
                nombre: 'Chamarra',
                precio: 123.45,
                cantidad: 50,
                descripcion: 'Chamarra de moda',
                foto: 'https://www.happychefuniforms.com/media/wysiwyg/a-spot-refresh/Tshirts-CatBanner-d.jpg.pagespeed.ce.5PvM04DRt6.jpg'
            },
            {
                idproducto: 1,
                nombre: 'Chamarra',
                precio: 123.45,
                cantidad: 50,
                descripcion: 'Chamarra de moda',
                foto: 'https://www.happychefuniforms.com/media/wysiwyg/a-spot-refresh/Tshirts-CatBanner-d.jpg.pagespeed.ce.5PvM04DRt6.jpg'
            },
            {
                idproducto: 1,
                nombre: 'Chamarra',
                precio: 123.45,
                cantidad: 50,
                descripcion: 'Chamarra de moda',
                foto: 'https://www.happychefuniforms.com/media/wysiwyg/a-spot-refresh/Tshirts-CatBanner-d.jpg.pagespeed.ce.5PvM04DRt6.jpg'
            }
        ]

    }

    all() {
        return this.productos;
    }

}