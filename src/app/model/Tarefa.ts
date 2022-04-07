export class Tarefa {
  id?: number
  titulo: string
  descricao: string
  done: Boolean

  constructor(titulo: string, descricao: string, id: number){
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.done = false
  }
}