import { Component, OnInit, DoCheck, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo : string;
    public listado : string;
    @Input() entrada: string;
    @Output() salida = new EventEmitter<string>();
    constructor(){
        this.titulo = "Componentes de Videojuegos";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componente Videojuego.component");
    }
    //Se ejecuta cuando se carga un componente
    ngOnInit(){
        //console.log("OnInit ejecutado");
    }
    //Se ejecuta cada vez que un componente sufre un cambio
    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestroy ejecutado");
    }

    enviarAlComponente(){
        this.salida.emit('Soy el componenente Video juego')
    }

    cambiarTitulo(){
        this.titulo = "Titulo modificado";
    }
}