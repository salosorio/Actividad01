import { Injectable } from '@angular/core';
import { FormModel } from 'src/app/core/models/form.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  save(cargar: FormModel): string {
    return `Save success ${cargar.nombre} - ${cargar.apellido} -${cargar.identificacion}-${cargar.edad}`;
  }

  get(): FormModel {
    return { nombre: 'Isabela', apellido: 'Loaiza', identificacion:123654, edad:21};
  }
}
