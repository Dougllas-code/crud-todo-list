import { LocationChangeEvent } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Tarefa } from 'src/app/model/Tarefa';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css']
})

export class CardTarefaComponent implements OnInit {

  faEdit = faEdit
  faTrash = faTrash

  id: any
  titulo: string
  descricao: string

  @Input() tarefas: Tarefa[]
  @Output() tarefaAlterada = new EventEmitter()
  @Output() exclusaoTarefaConfirmada = new EventEmitter()
  @Output() tarefaConcluida = new EventEmitter()

  @Output() selecionarStatus = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  definirDadoTarefa(tarefa: Tarefa) {
    this.id = tarefa.id
    this.titulo = tarefa.titulo
    this.descricao = tarefa.descricao
  }

  tarefaAtualizada(tarefa: Tarefa) {
    this.tarefaAlterada.emit(tarefa)
  }

  excluirTarefa(id: any) {
    this.exclusaoTarefaConfirmada.emit(id)
  }

  concluirTarefa(id: any) {
    this.tarefaConcluida.emit(id)
  }

  buscarPorStatus(evento: any) {
    this.selecionarStatus.emit(evento.target.value)
  }

}
