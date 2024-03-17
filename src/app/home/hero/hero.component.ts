import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  protected env = environment;
}
