import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { FaqComponent } from './faq/faq.component';
@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FaqComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  protected env = environment;

}
