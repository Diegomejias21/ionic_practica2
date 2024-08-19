import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ape: string = "Perez";
  edad: number = 26;

  arregloPersona: any = {
    nombre: 'Jose',
    apellido: 'Rodriguez',
    edad: 25
  }

  listaP: any=[
    {
      id:1,
      comuna:''
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //crear logica de programación
    this.router.navigate(['/agregar']);
  }

}
