import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastService } from 'makki-toast';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: 'home.component.css'
})
export class HomeComponent {
  constructor(
    private readonly toast: ToastService,
  ) {}

  handleToast(): void {
    this.toast.success({
      title: 'Simple',
      description: 'Simple toast message'
    });
  }
}