export class Tarefa {
  titulo: string
  descricao: string
  status: StatusTarefa

  constructor(titulo: string, descricao: string){
    this.titulo = titulo
    this.descricao = descricao
    this.status = StatusTarefa.PENDENTE
  }
}

export enum StatusTarefa {
  'CONCLUIDA',
  'CANCELADA',
  'PENDENTE'
}