import { Injectable, signal } from '@angular/core';

export interface Atleta {
  id?: number;
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: string; // Adicionado
  cep: string;
  rua_logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  // Signal para manter a lista reativa
  private listaAtletas = signal<Atleta[]>([]);

  getAtletas() {
    return this.listaAtletas;
  }

  adicionarAtleta(atleta: Atleta) {
    this.listaAtletas.update(lista => [...lista, atleta]);
  }

  excluirAtleta(id?: number) {
    this.listaAtletas.update(atletas => atletas.filter(a => a.id !== id));
  }
}