import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FormModel } from 'src/app/core/models/form.model';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  
  
  @Output() submitEvent = new EventEmitter<FormModel>();

    nombre!: string;
    apellido!: string;
    identificacion!: number;
    edad!: number

  constructor(  
    
  ) { }

  ngOnInit(): void {
  }

  onClickSubmit(): void {
    const cargar: FormModel = { nombre: this.nombre, apellido: this.apellido, identificacion: this.identificacion, edad:this.edad };
    this.submitEvent.emit(cargar);
  }

  //buscar( termino : string){
   // this.userService.
  //}

}
