import { Component } from '@angular/core';
import { ApService } from '../../ap.service';
import { Perfil } from '../../models/perfil';
import { Lista } from '../../models/lista';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet,RouterLink,RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

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
  imageSource? : String = "";

  constructor(private ap: ApService){ }

  ngOnInit(){

    this.ap.getPerfis().subscribe({
      next: (data) => {
        this.perfil = data;

      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

}
