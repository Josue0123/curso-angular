import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillasService {

  public zapatillas : Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebock Classic', 'Rebook', 'Rojo', 80, true),
      new Zapatilla('Nike Sport', 'Nike', 'Azul', 60, false),
      new Zapatilla('Charlie Boy', 'Charlie', 'Negro', 800, true),
      new Zapatilla('Charlie Boy', 'Charlie', 'Negro', 800, false),
    ]; 
  }

  getTexto(){
    return "Hola mundo desde un servicio";
  }

  getZapatillas() : Array<Zapatilla>{
    return this.zapatillas;
  }
}
