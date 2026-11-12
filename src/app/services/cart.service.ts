import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  public items$: Observable<any[]> = this.itemsSubject.asObservable();

  // Retorna os itens atuais
  get items(): any[] {
    return this.itemsSubject.getValue();
  }

  // Adiciona um novo item ou incrementa a quantidade se já existir
  adicionarAoCarrinho(produto: any): void {
    const itensAtuais = [...this.items];
    const index = itensAtuais.findIndex(item => item.id === produto.id);

    if (index > -1) {
      // Se já está no carrinho, soma a quantidade
      itensAtuais[index].quantidade += (produto.quantidade || 1);
    } else {
      // Se é um item novo, adiciona com a quantidade selecionada
      itensAtuais.push({ ...produto, quantidade: produto.quantidade || 1 });
    }

    this.itemsSubject.next(itensAtuais);
  }

  // Atualiza a lista completa (usado ao alterar quantidade ou remover)
  atualizarItens(novosItens: any[]): void {
    this.itemsSubject.next(novosItens);
  }

  // Limpa todo o carrinho
  limparCarrinho(): void {
    this.itemsSubject.next([]);
  }
}