import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  quantidadeCarrinho: number = 0;
  termoPesquisa: string = '';

  // Controle de exibição do Modal
  exibirModalAuth: boolean = false;
  modoModal: 'login' | 'cadastro' = 'login';

  // Formulário de Login
  loginData = {
    email: '',
    senha: ''
  };

  // Formulário de Cadastro completo
  cadastroData = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    senha: ''
  };

  ufs: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe((items: any[]) => {
      this.quantidadeCarrinho = items.reduce((total: number, item: any) => total + item.quantidade, 0);
    });
  }

  buscar(): void {
    if (this.termoPesquisa.trim()) {
      this.router.navigate(['/catalogo'], { queryParams: { busca: this.termoPesquisa } });
    }
  }

  // Ações do Modal
  abrirModal(modo: 'login' | 'cadastro'): void {
    this.modoModal = modo;
    this.exibirModalAuth = true;
  }

  fecharModal(): void {
    this.exibirModalAuth = false;
  }

  // Auto-preenchimento por CEP (ViaCEP)
  buscarCep(): void {
    const cepLimpo = this.cadastroData.cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(dados => {
          if (!dados.erro) {
            this.cadastroData.logradouro = dados.logradouro;
            this.cadastroData.bairro = dados.bairro;
            this.cadastroData.cidade = dados.localidade;
            this.cadastroData.uf = dados.uf;
          }
        })
        .catch(() => {});
    }
  }

  submeterLogin(): void {
    console.log('Dados de Login:', this.loginData);
    // Adicione a chamada ao seu serviço de autenticação aqui
    this.fecharModal();
  }

  submeterCadastro(): void {
    console.log('Dados de Cadastro:', this.cadastroData);
    // Adicione a chamada ao seu serviço de cadastro aqui
    this.fecharModal();
  }
}