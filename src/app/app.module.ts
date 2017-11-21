import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula/components/dragular.module';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { CardComponent } from './components/workspace/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { CardItemComponent } from './components/workspace/card/card-item/card-item.component';
import { CardService } from './components/workspace/card/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardItemComponent,
    FormComponent,
    NavbarComponent,
    WorkspaceComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    DragulaModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
