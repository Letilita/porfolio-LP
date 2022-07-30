import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  miPorfolio: any;
  edicion: Boolean = false;

  constructor( private datos: DataService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
      this.edicion=this.datos.logueado;
  } );
  console.log(this.edicion)
  
  }

}
