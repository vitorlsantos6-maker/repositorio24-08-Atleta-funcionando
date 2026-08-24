import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao-corrida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscricao-corrida.html',
  styleUrl: './inscricao-corrida.css'
})
export class InscricaoCorridaComponent {
  valorInscricao: number = 89.00;

  inscricao = {
    atleta: '',
    cpf: '',
    dataNascimento: '',
    sexo: 'M',
    cep: '',
    rua_logradouro: '',
    cidade: '',
    uf: '',
    corrida: '',
    camiseta: 'M'
  };

  salvarInscricao() {
    console.log('Inscrição salva com sucesso:', this.inscricao);
    alert(`Inscrição de ${this.inscricao.atleta} realizada com sucesso! Valor: R$ ${this.valorInscricao.toFixed(2)}`);
  }
}