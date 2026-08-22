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
    corrida: '',
    camiseta: 'M'
  };

  salvarInscricao() {
    console.log('Dados salvos:', this.inscricao);
    alert('Inscrição salva com sucesso!');
  }
}