import { Component, Input } from '@angular/core';
import { homeSection } from '../../intefaces/home-section';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-about-info',
  standalone: true,
  imports: [],
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.scss'
})
export class AboutInfoComponent {
  protected env = environment;
  @Input() section! :homeSection;

}
