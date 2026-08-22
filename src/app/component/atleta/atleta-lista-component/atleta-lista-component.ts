import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AtletaService, Atleta } from '../../../service/atleta-service'; // <--- Com hífen: atleta-service

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

  buscarPessoa(atleta: Atleta) {
    this.router.navigate(['/cadastroatleta', atleta.id]);
  }

  excluirAtleta(atleta: Atleta) {
    this.atletaService.excluirAtleta(atleta.id);
  }
}