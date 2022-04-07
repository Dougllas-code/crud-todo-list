import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/model/Tarefa';
import { CreateTarefaViewModel } from 'src/app/ViewModel/CreateTarefaViewModel';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  tarefas: Tarefa[]

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.listarTarefas()
  }

  listarTarefas() {
    this.homeService.listarTarefas().subscribe(res => {
      this.tarefas = res
    })
  }

  salvarTarefa(tarefa: CreateTarefaViewModel) {
    this.homeService.salvarTarefa(tarefa).subscribe(res => {
      this.listarTarefas()
    })
  }

  editartarefa(tarefa: Tarefa) {
    this.homeService.editarTarefa(tarefa.id, tarefa).subscribe(res => {
      this.listarTarefas()
    })
  }

  excluirTarefa(id: any) {
    this.homeService.excluirTarefa(id).subscribe(res => {
      this.listarTarefas()
    })
  }

  concluirTarefa(id: any) {
    this.homeService.concluirTarefa(id).subscribe(res => {
      this.listarTarefas()
    })
  }

  buscarPorStatus(status: string){
    if(status == 'TODAS'){
      this.listarTarefas()
    }else if(status == 'PENDENTES'){
      this.homeService.buscarPorStatus(false).subscribe(res =>{
        this.tarefas = res
      })
    }else{
      this.homeService.buscarPorStatus(true).subscribe(res => {
        this.tarefas = res
      })
    }
  }
}
