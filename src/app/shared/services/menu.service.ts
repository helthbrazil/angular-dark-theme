import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuOpenSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  // Método para abrir o menu
  openMenu(): void {
    this.menuOpenSubject.next(true);
  }

  // Método para fechar o menu
  closeMenu(): void {
    this.menuOpenSubject.next(false);
  }

  // Método para alternar o estado do menu (abrir/fechar)
  toggleMenu(): void {
    const currentStatus = this.menuOpenSubject.getValue();
    this.menuOpenSubject.next(!currentStatus);
  }

  // Método para obter o estado atual do menu (aberto/fechado)
  getMenuStatus(): Observable<boolean> {
    return this.menuOpenSubject.asObservable();
  }
}
