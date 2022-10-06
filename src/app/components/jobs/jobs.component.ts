import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
myPortfolio:any;
  constructor(private datosProject:DatosService) { }

  ngOnInit(): void {
    this.datosProject.obtenerDatos().subscribe(data=>this.myPortfolio=data.projects);
  }

}
