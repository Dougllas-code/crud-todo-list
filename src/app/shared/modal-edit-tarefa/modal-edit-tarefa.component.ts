import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-edit-tarefa',
  templateUrl: './modal-edit-tarefa.component.html',
  styleUrls: ['./modal-edit-tarefa.component.css']
})
export class ModalEditTarefaComponent implements OnInit {

  faEdit = faEdit

  constructor() { }

  ngOnInit(): void {
  }

}
