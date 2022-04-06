import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css']
})
export class CardTarefaComponent implements OnInit {

  faEdit = faEdit
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

}
