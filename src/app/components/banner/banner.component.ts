import { Component } from '@angular/core';
import { ApService } from '../../ap.service';
import { Perfil } from '../../models/perfil';
import { Lista } from '../../models/lista';
import { RouterOutlet,RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

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

  constructor(private ap: ApService){ }

  ngOnInit(){
    // this.ap.createPerfil(this.perfil);
    // this.listaPErfil = this.ap.listaPerfis;
    // console.log(this.listaPErfil);
  }

}
