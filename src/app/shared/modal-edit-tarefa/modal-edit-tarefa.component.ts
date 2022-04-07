import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Tarefa } from 'src/app/model/Tarefa';

@Component({
  selector: 'app-modal-edit-tarefa',
  templateUrl: './modal-edit-tarefa.component.html',
  styleUrls: ['./modal-edit-tarefa.component.css']
})

export class ModalEditTarefaComponent implements OnInit {

  faEdit = faEdit

  @Input() id: any
  @Input() titulo: string
  @Input() descricao: string

  @Output() tarefaAlterada = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  adicionarAlteracoes(){
    const tarefaAtualizada = new Tarefa(this.titulo, this.descricao, this.id)
    this.tarefaAlterada.emit(tarefaAtualizada)
  }

}
