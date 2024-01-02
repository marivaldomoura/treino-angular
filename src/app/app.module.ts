import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FormsComponent } from './components/forms/forms.component';
import { LegendsComponent } from './components/legends/legends.component';
import { ListsComponent } from './components/lists/lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FormsComponent,
    LegendsComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
