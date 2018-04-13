import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { NavbarComponent } from './nav/nav.component';

import { ProductService } from './products/product.service';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent,
    ProductComponent,
    NavbarComponent
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-ES' // es-ES for Spain
  },
    ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }