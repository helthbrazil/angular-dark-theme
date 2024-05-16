import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';

@Component({
  selector: 'neo-side-menu',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent implements OnInit {
  @ViewChild('sideMenu', { static: false }) sideMenu: ElementRef | undefined;
  showMenu = false;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuStatus().subscribe((showMenu) => {
      this.showMenu = showMenu;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  clickOutside(event: any) {
    if (this.sideMenu) {
      const element = this.sideMenu.nativeElement;
      const marginLeft = window.getComputedStyle(element).marginLeft;

      if (marginLeft === '0px') {
        //this.menuService.toggleMenu();
      }
    }
  }
}
