import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillasService } from '../services/zapatillas.service';
import { Configuracion } from '../models/configuracion';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers : [ZapatillasService]
})

export class ZapatillasComponent implements OnInit{
    public titulo : string;
    public zapatillas : Array<Zapatilla>;
    public marcas : String[];

    constructor(
        private _zapatillaService : ZapatillasService
    ){
        this.marcas =  new Array();
        this.titulo = "Catálogo de Zapatillas";
           
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
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