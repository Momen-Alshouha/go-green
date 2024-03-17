import { Component, Input } from '@angular/core';
import { homeSection } from '../../intefaces/home-section';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
})
export class HomeSectionComponent {
  protected env = environment;
  @Input() sectionData!: homeSection;
  @Input() additionalClasses?: string;
}
