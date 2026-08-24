import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AtletaService, Atleta } from '../../../service/atleta-service';

@Component({
  selector: 'app-atleta-lista-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css'
})
export class AtletaListaComponent {
  listaAtletas;

  constructor(private atletaService: AtletaService, private router: Router) {
    this.listaAtletas = this.atletaService.getAtletas();
  }

  calcularIdade(dataNascimento: string): number {
    if (!dataNascimento) return 0;
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  buscarPessoa(atleta: Atleta) {
    this.router.navigate(['/cadastroatleta', atleta.id]);
  }

  excluirAtleta(atleta: Atleta) {
    this.atletaService.excluirAtleta(atleta.id);
  }
}