import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { CardComponent } from './components/workspace/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { CardItemComponent } from './components/workspace/card/card-item/card-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    CardComponent,
    NavbarComponent,
    FormComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
