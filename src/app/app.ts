import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  Header } from './components/header/header';
import {  Footer } from './components/footer/footer';
import { Mural } from './components/mural/mural';

@Component({
  imports: [RouterOutlet, Header,Footer, Mural],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sushibar');
}
