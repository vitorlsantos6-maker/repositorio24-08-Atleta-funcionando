import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: any[] = [];
  valorTotal: number = 0;

  // Estado do Pagamento
  metodoPagamento: 'pix' | 'cartao' | 'boleto' = 'pix';
  exibirSucesso: boolean = false;

  dadosCartao = {
    nomeTitular: '',
    numero: '',
    validade: '',
    cvv: ''
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe((items: any[]) => {
      this.itensCarrinho = items;
      this.calcularTotal();
    });
  }

  alterarQuantidade(item: any, delta: number): void {
    const novaQuantidade = item.quantidade + delta;
    if (novaQuantidade <= 0) {
      this.removerItem(item);
    } else {
      item.quantidade = novaQuantidade;
      this.atualizarCarrinho();
    }
  }

  removerItem(item: any): void {
    this.itensCarrinho = this.itensCarrinho.filter(i => i.id !== item.id);
    this.atualizarCarrinho();
  }

  limparCarrinho(): void {
    this.itensCarrinho = [];
    this.atualizarCarrinho();
  }

  calcularTotal(): void {
    this.valorTotal = this.itensCarrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  }

  atualizarCarrinho(): void {
    this.calcularTotal();
    if (typeof (this.cartService as any).atualizarItens === 'function') {
      (this.cartService as any).atualizarItens(this.itensCarrinho);
    } else if ((this.cartService as any).items$) {
      (this.cartService as any).items$.next(this.itensCarrinho);
    }
  }

  finalizarPagamento(): void {
    if (this.itensCarrinho.length === 0) return;

    this.exibirSucesso = true;
    setTimeout(() => {
      this.limparCarrinho();
      this.exibirSucesso = false;
    }, 4000);
  }
}