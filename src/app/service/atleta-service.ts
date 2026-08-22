import { Injectable, signal } from '@angular/core';

export interface Atleta {
  id: number;
  nome: string;
  cpf: string;
  sexo: string;
  cep?: string;
  rua_logradouro?: string;
  bairro?: string;
  cidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  private atletas = signal<Atleta[]>([
    { id: 1, nome: 'Vitor Silva', cpf: '111.222.333-44', sexo: 'M', cidade: 'São Paulo', uf: 'SP' },
    { id: 2, nome: 'Maria Souza', cpf: '555.666.777-88', sexo: 'F', cidade: 'Santos', uf: 'SP' }
  ]);

  getAtletas() {
    return this.atletas;
  }

  adicionarAtleta(novoAtleta: Omit<Atleta, 'id'>) {
    const listaAtual = this.atletas();
    const novoId = listaAtual.length > 0 ? Math.max(...listaAtual.map(a => a.id)) + 1 : 1;
    this.atletas.set([...listaAtual, { id: novoId, ...novoAtleta }]);
  }

  excluirAtleta(id: number) {
    this.atletas.set(this.atletas().filter(a => a.id !== id));
  }
}