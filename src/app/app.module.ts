import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CardTarefaComponent } from './view/tarefas/card-tarefa/card-tarefa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalAddTarefaComponent } from './shared/modal-add-tarefa/modal-add-tarefa.component';
import { ModalEditTarefaComponent } from './shared/modal-edit-tarefa/modal-edit-tarefa.component';
import { ModalDeleteTarefaComponent } from './shared/modal-delete-tarefa/modal-delete-tarefa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardTarefaComponent,
    ModalAddTarefaComponent,
    ModalEditTarefaComponent,
    ModalDeleteTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
