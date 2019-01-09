import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators} from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-usuario',
  templateUrl: 'cad-usuario.html',
})
export class CadUsuarioPage {

  private userForm: any;

  msgName = "";
  msgTelefone = "";
  msgData = "";
  msgEmail = "";
  msgCpf = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, 
    private alertController: AlertController) {
    this.userForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.compose([Validators.minLength(11),  Validators.maxLength(11), Validators.required])],
      data: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required])]
    })
  }

  limpar(){
    this.userForm.reset();
  }

  salvar(){
    let {nome, telefone, data, email, cpf} = this.userForm.controls;
    
    //Validar os campos de acordo com meu controls
    if(!this.userForm.valid){
      //Validar Nome
      if(!nome.valid){
        this.msgName="Nome Invalido!";
      }else{
        this.msgName=null;
      }

      //Validar Telefone
      if(!telefone.valid){
        this.msgTelefone="Telefone Invalido ou precisa ter 11 digitos!";
      }else{
        this.msgTelefone=null;
      }

      //Validar Data
      if(!data.valid){
        this.msgData="Data Invalido!";
      }else{
        this.msgData=null;
      }

      //Validar Email
      if(!email.valid){
        this.msgEmail="Email Invalido!";
      }else{
        this.msgEmail=null;
      }

      //Validar CPF
      if(!cpf.valid){
        this.msgCpf="CPF Invalido ou precisa ter 11 digitos!";
      }else{
        this.msgCpf=null;
      } 
    }else{
      let alerta = this.alertController.create({
        title: "Usuário Cadastrado com Sucesso",
        buttons: ['Ok']
      })
      alerta.present();
      if(this.navCtrl.canGoBack){
        this.navCtrl.setRoot(HomePage);
      }else{
        console.log("Impossivel Voltar");
      }
    }
  }
}
