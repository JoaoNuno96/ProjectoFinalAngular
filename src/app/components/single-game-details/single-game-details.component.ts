import { Component } from '@angular/core';
import { ApService } from '../../ap.service';
import { RouterLink,ActivatedRoute  } from '@angular/router';
import { JogoDetalhes } from '../../models/jogosDetalhes';
import { Perfil } from '../../models/perfil';
import { Lista } from '../../models/lista';
import { minimumSystemRequirements } from "../../models/minimumSystemRequirements";
import { screenshot } from "../../models/screenshot";

@Component({
  selector: 'app-single-game-details',
  standalone: true,
  imports: [],
  templateUrl: './single-game-details.component.html',
  styleUrl: './single-game-details.component.scss'
})
export class SingleGameDetailsComponent {

  gameId : string = "";

  screen : screenshot = {
    id : "",
    image : ""
  }

  minimumR : minimumSystemRequirements = {
    os : "",
    processor : "",
    memory : "",
    graphics : "",
    storage : ""
  }

  game : JogoDetalhes = {
    id : "",
    title : "",
    thumbnail : "",
    status : "",
    shortDescription : "",
    description : "",
    gameUrl : "",
    genre : "",
    platform : "",
    publisher : "",
    developer : "",
    releaseDate : "",
    freetogameProfileUrl : "",
    minimumSystemRequirements : this.minimumR,
    screenshots : [this.screen]
  }

  //USER PARA ENVIAR ATUALIZADO
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



  //INJEÇÂO DE DEPENDÊNCIA PARA ACEDER AO PARAMETRO ENVIADO PELA ROTA
  constructor(private route: ActivatedRoute, private ap: ApService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = params['id'];
    });

    this.ap.getJogoUnico(this.gameId).subscribe({
      next: (data) => {
        this.game = data;
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });

    this.ap.getPerfis().subscribe({
      next: (data) => {
        this.perfil = data;
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

  sendToList(listName : string)
  {
    this.verifyAndDeleteGameId();

    for(var i in this.perfil.lists)
    {
      if(this.perfil.lists[i].name == listName)
      {
        this.perfil.lists[i].gamesIds?.push(this.gameId);
      }
    }

    this.ap.editPerfil(this.perfil).subscribe({
      next: (data) => {
        console.log("Atualizado com sucesso",data);
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });

    alert(`Item change to ${listName}`);

  }

  //VERIFICA TODAS AS LISTAS E ELIMINA O GAME ID DESSA LISTA QUANDO TRANSITA PARA OUTRA
  verifyAndDeleteGameId()
  {
    let gid = this.gameId;
    let prof = this.perfil;

    for(var i in prof.lists)
      {
        prof.lists[i].gamesIds?.forEach(function(item, index, object){

          if(item == gid)
          {
            object.splice(index,1);
          }
        })
      }

      this.ap.editPerfil(prof).subscribe({
        next: (data) => {
          console.log("Atualizado com sucesso",data);
        },
        error: (erro) =>{
          console.error("Algo deu errado:", erro);
        }
      });
  }



}

