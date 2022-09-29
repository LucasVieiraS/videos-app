import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  prefersDark = window.matchMedia('(prefers-color-scheme: light)');

  constructor() {
    this.toggleDarkTheme(this.prefersDark.matches);
    this.prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('light', shouldAdd);
  }

}
