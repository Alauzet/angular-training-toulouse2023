import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion des livres';
  show = true;

  url1 = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
  url2="https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
  url = this.url1

  mois = ['janvier', 'février', 'mars', '...'];

  changeLogo(){
    this.url = (this.url === this.url1)?this.url2:this.url1;
  }

  showHideMonths(){
    this.show = !this.show;
  }
}
