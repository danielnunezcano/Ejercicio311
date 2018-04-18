import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProwebAccordionComponent } from './proweb-accordion/proweb-accordion.component';
import { ProwebAccordionCeldaComponent } from './proweb-accordion-celda/proweb-accordion-celda.component';


@NgModule({
  declarations: [
    AppComponent,
    ProwebAccordionComponent,
    ProwebAccordionCeldaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
