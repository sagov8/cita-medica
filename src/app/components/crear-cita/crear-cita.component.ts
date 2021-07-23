import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  
  nombre = '';
  documento = '';
  direccion = '';
  telefono = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if(this.nombre == '' || this.documento == '' || this.direccion == ''
    || this.telefono == '' ||this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    
    //Creamos objeto para enviarselo al padre
    const CITA = {
      nombre: this.nombre,
      documento: this.documento,
      direccion: this.direccion,
      telefono: this.telefono,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }

  resetCampos() {
    this.nombre = '';
    this.documento = '';
    this.direccion = '';
    this.telefono = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
