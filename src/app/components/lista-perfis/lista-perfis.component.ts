import { Component } from '@angular/core';
import { ApService } from '../../ap.service';
import { Perfil } from '../../models/perfil';
import { Lista } from '../../models/lista';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-perfis',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './lista-perfis.component.html',
  styleUrl: './lista-perfis.component.scss'
})
export class ListaPerfisComponent {

  lista : Lista =
  {
    id : "",
    name : "",
    gamesIds : Array<string>()
  }

  perfil : Perfil = {
    id : "",
    name : "",
    email : "",
    password : "",
    avatar : "",
    lists : Array<Lista>()
  }

  constructor(private ap: ApService){
    // console.log(this.listaUsers);
  }

  ngOnInit(){
    this.ap.getPerfis().subscribe({
      next: (data) => {
        this.perfil = data;
        console.log("PERFIL",this.perfil);
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

}
