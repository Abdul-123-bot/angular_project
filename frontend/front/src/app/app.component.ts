import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true, // Mark this component as standalone
  imports: [RouterOutlet],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
