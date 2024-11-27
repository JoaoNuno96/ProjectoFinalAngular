import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterModule,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApService } from '../../ap.service';
import { Perfil } from '../../models/perfil';
import { Lista } from '../../models/lista';
import { Jogo } from '../../models/jogo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gamelist-users',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './gamelist-users.component.html',
  styleUrl: './gamelist-users.component.scss'
})
export class GamelistUsersComponent {

    typeList : number = 0;
    typeListName : string = "";

    listsRecebida : Array<Lista> = [

    ];

    listaFiltrada : Array<Lista> = [

    ];

    listGames : Array<Jogo> = [

    ]

    //INJEÇÂO DE DEPENDÊNCIA PARA ACEDER AO PARAMETRO ENVIADO PELA ROTA
    constructor(private route: ActivatedRoute, private ap: ApService) {
     }

    ngOnInit() {

      var url = window.location.href;

      //RECUPERAR PARAMETRO ENVIADO
      this.route.params.subscribe(params => {
        this.typeList = params['id'];
        this.typeListName = this.convertIdInListName(this.typeList);

        //VERIFICAR ALTERAÇOES NO PARAMETRO DA PAGINA
        this.checkHttpGetParameterChange(this.typeList,url);
      });

      //IR BUSCAR LISTA DE USER E FILTRAR POR O PARAMETRO ENVIADO
      this.ap.getPerfis().subscribe({
        next: (data) => {

          let nomeLista = this.typeListName;

          this.listsRecebida = data.lists;

          this.listaFiltrada = this.listsRecebida.filter(function(element){ return element.name == nomeLista });
          var listaFiltadaNumeroIDS = this.listaFiltrada[0].gamesIds !;

          this.saveGames(listaFiltadaNumeroIDS);
        },
        error: (erro) =>{
          console.error("Algo deu errado:", erro);
        }
      });

    }

    saveGames(listaGameID : Array<string>)
    {
      for(var i in listaGameID)
      {
        this.saveGame(listaGameID[i]);
      }
    }

    saveGame(id : string)
    {
      this.ap.getJogoUnicoSemDetalhes(id).subscribe({
        next: (data) => {
          console.log("Sucesso");
          this.listGames.push(data);
        },
        error: (erro) =>{
          console.error("Algo deu errado:", erro);
        }
      });
    }

    convertIdInListName(i : number) : string
    {
      if(i == 1)
      {
        return "Play Later";
      }
      else if(i == 2)
      {
        return "Currently Playing";
      }
      else if(i == 3)
      {
        return "Played";
      }
      else if(i == 4)
      {
        return "Completed";
      }
      else
      {
        return "";
      }

    }


    //VERIFICA SE O TEU PARAMETRO ENVIADO PARA ROTA SOFRE ALTERAÇAO E CASO SOFRA CARREGA A PAGINA COM TABELA COM NOVOS DADOS
    checkHttpGetParameterChange(typeListNumb : number ,link : string)
    {
      var num = parseInt(link[35]);

      console.log("NUM",num);
      console.log("LINK",typeListNumb);

      if(num != typeListNumb)
      {
        window.location.reload();
      }
    }



}
