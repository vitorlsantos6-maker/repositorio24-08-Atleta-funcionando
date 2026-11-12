import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
  quantidadeSelecionada?: number;
}

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Barraca de Camping 4 Pessoas',
    descricao: 'Impermeável com coluna d\'água de 2000mm e montagem rápida.',
    preco: 349.90,
    categoria: 'Camping',
    imagem: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80'
  },
  {
    id: 2,
    nome: 'Saco de Dormir Térmico (-5°C a 10°C)',
    descricao: 'Compacto e leve, ideal para noites frias ao ar livre.',
    preco: 189.90,
    categoria: 'Camping',
    imagem: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=500&q=80'
  },
  {
    id: 3,
    nome: 'Mochila Cargueira 60L',
    descricao: 'Ergonomia avançada com capa de chuva embutida.',
    preco: 279.90,
    categoria: 'Trilha',
    imagem: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500&q=80'
  },
  {
    id: 4,
    nome: 'Bota de Trekking Impermeável',
    descricao: 'Solado antiderrapante com amortecimento para longas caminhadas.',
    preco: 399.00,
    categoria: 'Vestuário',
    imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'
  },
  {
    id: 5,
    nome: 'Lanterna de Cabeça LED 1000 Lúmens',
    descricao: 'Recarregável via USB com sensores de movimento.',
    preco: 79.90,
    categoria: 'Acessórios',
    imagem: 'https://images.unsplash.com/photo-1542332213-31f87348057f?w=500&q=80'
  },
  {
    id: 6,
    nome: 'Bicicleta Mountain Bike Aro 29',
    descricao: '21 marchas Shimano, freios a disco mecânicos e suspensão dianteira.',
    preco: 1299.00,
    categoria: 'Ciclismo',
    imagem: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80'
  },
  {
    id: 7,
    nome: 'Capacete de Ciclismo com Sinalizador LED',
    descricao: 'Estrutura reforçada em EPS e regulagem micrométrica.',
    preco: 119.90,
    categoria: 'Ciclismo',
    imagem: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80'
  },
  {
    id: 8,
    nome: 'Kayak Inflável Individual com Remo',
    descricao: 'Material PVC reforçado de alta durabilidade e bomba de ar inclusa.',
    preco: 849.00,
    categoria: 'Esportes Aquáticos',
    imagem: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80'
  },
  {
    id: 9,
    nome: 'Prancha de Stand Up Paddle (SUP) Inflável',
    descricao: 'Kit completo com remo ajustável, leal e bolsa de transporte.',
    preco: 1499.00,
    categoria: 'Esportes Aquáticos',
    imagem: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&q=80'
  },
  {
    id: 10,
    nome: 'Kit de Bastões de Caminhada (Par)',
    descricao: 'Alumínio ultra leve com sistema anti-impacto ajustável.',
    preco: 99.90,
    categoria: 'Trilha',
    imagem: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80'
  },
  {
    id: 11,
    nome: 'Fogareiro a Gás Portátil de Camping',
    descricao: 'Acendimento automático com acionamento piezoelétrico e maleta.',
    preco: 129.90,
    categoria: 'Camping',
    imagem: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&q=80'
  },
  {
    id: 12,
    nome: 'Garrafa Térmica de Inox 1 Litro',
    descricao: 'Mantém gelado por até 24h e quente por 12h.',
    preco: 89.90,
    categoria: 'Acessórios',
    imagem: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80'
  },
  {
    id: 13,
    nome: 'Cadeira de Praia/Camping Dobrável',
    descricao: 'Com porta-copos e suporte reforçado de até 120kg.',
    preco: 109.90,
    categoria: 'Camping',
    imagem: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80'
  },
  {
    id: 14,
    nome: 'Kit de Escalada (Cadeirinha + Mosquetão + Freio)',
    descricao: 'Equipamento certificado para segurança máxima em altura.',
    preco: 459.90,
    categoria: 'Escalada',
    imagem: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=500&q=80'
  },
  {
    id: 15,
    nome: 'Óculos de Sol Esportivo com Proteção UV400',
    descricao: 'Lentes polarizadas resistentes a impactos com armação leve.',
    preco: 69.90,
    categoria: 'Acessórios',
    imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80'
  }
];

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  produtos: Produto[] = PRODUTOS;
  produtosFiltrados: Produto[] = [];
  categoriaSelecionada: string = 'Todas';
  termoBusca: string = '';
  carregando: boolean = false;

  categorias: string[] = [
    'Todas', 'Camping', 'Trilha', 'Vestuário', 
    'Acessórios', 'Ciclismo', 'Esportes Aquáticos', 'Escalada'
  ];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtos.forEach(p => p.quantidadeSelecionada = 1);
    this.produtosFiltrados = this.produtos;

    this.route.queryParams.subscribe(params => {
      if (params['busca']) {
        this.termoBusca = params['busca'];
        this.aplicarFiltros();
      }
    });
  }

  alterarQuantidade(produto: Produto, delta: number): void {
    const novaQtd = (produto.quantidadeSelecionada || 1) + delta;
    if (novaQtd >= 1) {
      produto.quantidadeSelecionada = novaQtd;
    }
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    this.produtosFiltrados = this.produtos.filter(produto => {
      const bateCategoria = this.categoriaSelecionada === 'Todas' || produto.categoria === this.categoriaSelecionada;
      const bateBusca = produto.nome.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
                        produto.descricao.toLowerCase().includes(this.termoBusca.toLowerCase());
      return bateCategoria && bateBusca;
    });
  }

  adicionarAoCarrinho(produto: Produto): void {
    const qtd = produto.quantidadeSelecionada || 1;
    const itemParaAdicionar = { ...produto, quantidade: qtd };

    if (typeof (this.cartService as any).adicionarAoCarrinho === 'function') {
      (this.cartService as any).adicionarAoCarrinho(itemParaAdicionar);
    } else if (typeof (this.cartService as any).addItem === 'function') {
      (this.cartService as any).addItem(itemParaAdicionar);
    }

    // Redireciona automaticamente para o carrinho
    this.router.navigate(['/carrinho']);
  }
}