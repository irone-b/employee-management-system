import { Component, signal } from '@angular/core';
import { MainLayoutShell } from './main-layout-shell/main-layout-shell';

@Component({
  selector: 'app-root',
  imports: [MainLayoutShell],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('employee-management-system');
}
