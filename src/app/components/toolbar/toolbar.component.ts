import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'neo-toolbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ToggleThemeComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  constructor(public menuService: MenuService) {
    //this.menuService.openMenu();
  }

  toggleMenu(){
    this.menuService.toggleMenu();
  }
}
