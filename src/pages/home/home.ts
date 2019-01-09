import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadUsuarioPage } from '../cad-usuario/cad-usuario';
import { SobrePage } from '../sobre/sobre';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaNews = new Array<any>();

  constructor(public nav: NavController) {

  }

  openCadUsuarioPage(){
    this.nav.push(CadUsuarioPage);
  }

  openContatoPage(){
    this.nav.push(ContatoPage);
  }

  openSobrePage(){
    this.nav.push(SobrePage);
  }

  ionViewDidLoad(){
    this.listaNews = [
      {
        fonte:"CBN",
        legenda:"Copa do Mundo",
        descricao:"Mesmo sem o Brasil, bares e restaurantes estão confiantes para o final da Copa",
        data:"13/07/2018",
        imgPath:"noticia1.jpg"
      },
      {
        fonte:"UOL",
        legenda:"EM 24 DE SETEMBRO",
        descricao:"Fifa convida garotos tailandeses para prêmio do melhor do mundo",
        data:"12/07/2018",
        imgPath:"noticia2.jpg"
      },
      {
        fonte:"Globo.com",
        legenda:"Temperatura",
        descricao:"SC volta a registrar a menor temperatura do ano no país: -6,7°C",
        data:"13/07/2018",
        imgPath:"noticia3.jpg"
      },
      {
        fonte:"Bandnews",
        legenda:"Trump not welcome!",
        descricao:"Protestos marcam a visita de Trump à Inglaterra",
        data:"13/07/2018",
        imgPath:"noticia4.jpg"
      },
      {
        fonte:"Martinga.com",
        legenda:"Esporte e lazer",
        descricao:"Inscrições para 20ª Corrida do Alvorada encerram domingo (15)",
        data:"11/07/2018",
        imgPath:"noticia5.jpg"
      }
    ];
  }
}
