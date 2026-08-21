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
export class InscricaoCorrida {
  inscricao = {
    atleta: '',
    cpf: '',
    corrida: 'Circuito das Estações - Etapa Verão (15/11/2026)',
    distancia: '5km',
    camiseta: '',
    categoria: 'Geral Masculino / 30-39 anos',
    aceitouTermos: false,
    valor: '89,90'
  };

  finalizarInscricao() {
    if (!this.inscricao.aceitouTermos) {
      alert('Você precisa aceitar os termos do regulamento para continuar.');
      return;
    }
    console.log('Inscrição finalizada:', this.inscricao);
    alert('Inscrição realizada com sucesso! Redirecionando para o pagamento...');
  }
}