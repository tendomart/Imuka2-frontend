import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
=======
import { BodyComponent } from './body/body.component';
>>>>>>> 74ff115ad59f6bd3dcca8f578c7e4b5ed0cc7bad

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    BodyComponent
>>>>>>> 74ff115ad59f6bd3dcca8f578c7e4b5ed0cc7bad
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
