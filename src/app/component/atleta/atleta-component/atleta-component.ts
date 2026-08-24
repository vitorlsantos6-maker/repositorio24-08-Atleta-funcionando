import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AtletaService, Atleta } from '../../../service/atleta-service';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css'
})
export class AtletaComponent {
  nome: string = '';
  cpf: string = '';
  sexo: string = '';
  dataNascimento: string = ''; // Campo adicionado
  cep: string = '';
  rua_logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';

  editar: boolean = false;

  constructor(
    private atletaService: AtletaService,
    private router: Router
  ) {}

  enviaDadosAtleta() {
    const novoAtleta: Atleta = {
      id: Date.now(),
      nome: this.nome,
      cpf: this.cpf,
      sexo: this.sexo,
      dataNascimento: this.dataNascimento, // Propriedade adicionada
      cep: this.cep,
      rua_logradouro: this.rua_logradouro,
      bairro: this.bairro,
      cidade: this.cidade,
      uf: this.uf
    };

    this.atletaService.adicionarAtleta(novoAtleta);
    this.router.navigate(['/listaatleta']);
  }
}