import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-delete-tarefa',
  templateUrl: './modal-delete-tarefa.component.html',
  styleUrls: ['./modal-delete-tarefa.component.css']
})
export class ModalDeleteTarefaComponent implements OnInit {

  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

}
