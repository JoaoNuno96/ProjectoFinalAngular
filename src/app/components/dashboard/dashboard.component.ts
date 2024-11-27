import { Component } from '@angular/core';
import { ApService } from '../../ap.service';
import { Perfil } from '../../models/perfil';
import { Lista } from '../../models/lista';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

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
    this.ap.getPerfis().subscribe({
      next: (data) => {
        this.perfil = data;


      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

  updateUser()
  {
    this.ap.editPerfil(this.perfil).subscribe({
      next: (data) => {
        console.log("Atualizado com sucesso",data);
        this.popUp("addSuccess");
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

  removePhotoUser()
  {
    this.perfil.avatar = "https://vineview.com/wp-content/uploads/2017/07/avatar-no-photo.png";

    this.ap.editPerfil(this.perfil).subscribe({
      next: (data) => {
        console.log("Removido com sucesso com sucesso",data);
        this.popUp("removePhoto");
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

  changePhotoUser()
  {
    this.perfil.avatar = "https://vineview.com/wp-content/uploads/2017/07/avatar-no-photo.png";

    this.ap.editPerfil(this.perfil).subscribe({
      next: (data) => {
        console.log("Removido com sucesso com sucesso",data);
        this.popUp("removePhoto");
      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

  popUp(status : string)
  {
    if(status == "addSuccess")
    {
      var i = document.createElement("div");
      i.id = "popAlert";
      i.className = "alert alert-success text-center";
      i.role = "alert";
      i.innerText = "Dados alterados com sucesso";

      document.getElementById("popUpRepresent")?.append(i);

      setTimeout(function(){
        document.getElementById("popAlert")?.remove();
      },2000);
    }

    if(status == "removePhoto")
    {
      var i = document.createElement("div");
      i.id = "popAlert";
      i.className = "alert alert-danger text-center";
      i.role = "alert";
      i.innerText = "Removido com sucesso com sucesso";

      document.getElementById("popUpRepresent")?.append(i);

      setTimeout(function(){
        document.getElementById("popAlert")?.remove();
      },2000);
    }

  }
}



// <div class="alert alert-secondary" role="alert">
//   A simple secondary alert—check it out!
// </div>
