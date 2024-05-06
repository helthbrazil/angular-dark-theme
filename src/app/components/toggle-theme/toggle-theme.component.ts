import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css',
})
export class ToggleThemeComponent implements OnInit {
  darkTheme = false;

  constructor() {}

  ngOnInit(): void {
    this.loadTheme();
  }

  loadTheme(): void {
    const themeStorage = localStorage.getItem('theme');
    this.darkTheme = themeStorage === 'dark';
    this.applyTheme();
  }

  applyTheme(): void {
    const theme = this.darkTheme ? 'dark-theme' : '';
    this.setBodyClassName(theme);
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.applyTheme();
    localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light');
  }

  setBodyClassName(className: string): void {
    document.body.className = className;
  }
}


