import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSubMenuComponent } from './header-sub-menu/header-sub-menu.component';
import { ListElementComponent } from './list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSubMenuComponent,
    ListElementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
