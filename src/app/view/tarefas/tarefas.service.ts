import { Injectable } from '@angular/core';
import { StatusTarefa, Tarefa } from 'src/app/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas: Tarefa[]

  constructor() {
    this.tarefas = []
  }

  listarTarefas(){
    return this.tarefas
  }

  salvarTarefa(titulo: string, descricao: string){
    const tarefa = new Tarefa(titulo, descricao)
    this.tarefas.push(tarefa)
  }

  editarTarefa(index: number, titulo: string, descricao: string){
    const tarefa = this.tarefas[index]
    tarefa.titulo = titulo
    tarefa.descricao = descricao
  }

  excluirTarefa(index: number){
    const tarefa = this.tarefas[index]
    tarefa.status = StatusTarefa.CANCELADA
  }

  concluirTarefa(index: number){
    const tarefa = this.tarefas[index]
    tarefa.status = StatusTarefa.CONCLUIDA
  }

}
