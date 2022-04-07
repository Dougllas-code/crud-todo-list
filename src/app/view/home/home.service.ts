import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/app/model/Tarefa';
import { CreateTarefaViewModel } from 'src/app/ViewModel/CreateTarefaViewModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  tarefas: Tarefa[]
  url: string = 'https://localhost:7232/v1/tarefa'

  constructor(private http: HttpClient) { }

  listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url)
  }

  salvarTarefa({ titulo, descricao }: CreateTarefaViewModel): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.url, { titulo, descricao })
  }

  editarTarefa(id: any, { titulo, descricao }: CreateTarefaViewModel) {
    let _url = `${this.url}/${id}`
    return this.http.put(_url, { titulo, descricao })
  }

  excluirTarefa(id: any){
    let _url = `${this.url}/${id}`
    return this.http.delete(_url)
  }

  concluirTarefa(id: any){
    let _url = `${this.url}/${id}`
    return this.http.patch(_url, '')
  }

  buscarPorStatus(status: Boolean){
    let _url = `${this.url}/${status}`
    return this.http.get<Tarefa[]>(_url)
  }
}
