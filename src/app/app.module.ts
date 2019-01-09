import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Importar para utilizar as paginas no app
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadUsuarioPage } from '../pages/cad-usuario/cad-usuario';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';

//Apos importar deve inserir as pages na declarations e entrycomponents

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadUsuarioPage,
    SobrePage,
    ContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadUsuarioPage,
    SobrePage,
    ContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
