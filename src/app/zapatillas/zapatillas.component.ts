import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { Configuracion } from '../models/configuracion';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo : string;
    public zapatillas : Array<Zapatilla>;
    public marcas : String[];

    constructor(){
        this.marcas =  new Array();
        this.titulo = "Catálogo de Zapatillas";
        this.zapatillas = [
            new Zapatilla('Reebock Classic', 'Rebook', 'Rojo', 80, true),
            new Zapatilla('Nike Sport', 'Nike', 'Azul', 60, false),
            new Zapatilla('Charlie Boy', 'Charlie', 'Negro', 800, true),
            new Zapatilla('Charlie Boy', 'Charlie', 'Negro', 800, false),
        ];    
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
        });
        console.log(this.marcas);
    }
}