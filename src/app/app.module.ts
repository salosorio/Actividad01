import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PiePaginaComponent,
    FormularioUsuarioComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
