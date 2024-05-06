import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'neo-toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css'
})
export class ToggleThemeComponent {

  darkTheme = false;

  toggleTheme(){
    this.darkTheme = !this.darkTheme;

    const theme = this.darkTheme ? 'dark-theme' : '';
    document.body.className = theme;
  }
}
