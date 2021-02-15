import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {AuthModule} from './auth/auth.module';
import {JokesComponent} from './jokes/jokes.component';
import {JokeEditComponent} from './jokes/joke-edit/joke-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { MemeComponent } from './meme/meme.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokesComponent,
    JokeEditComponent,
    MemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AuthModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
