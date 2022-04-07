import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateTarefaViewModel } from 'src/app/ViewModel/CreateTarefaViewModel';

@Component({
  selector: 'app-modal-add-tarefa',
  templateUrl: './modal-add-tarefa.component.html',
  styleUrls: ['./modal-add-tarefa.component.css']
})
export class ModalAddTarefaComponent implements OnInit {

  titulo: string = ''
  descricao: string = ''

  @Output() novaTarefa = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  limparCamposModal() {
    this.titulo = ''
    this.descricao = ''
  }

  adicionarTarefa() {
    const tarefa = new CreateTarefaViewModel(this.titulo, this.descricao)
    this.novaTarefa.emit(tarefa)
    this.limparCamposModal()
  }

}
