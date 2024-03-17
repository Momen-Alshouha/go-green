import { Component, Input } from '@angular/core';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { environment } from '../../../environments/environment.development';
import { homeSection } from '../../intefaces/home-section';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-sections-list',
  standalone: true,
  imports: [HomeSectionComponent,CommonModule],
  templateUrl: './home-sections-list.component.html',
  styleUrl: './home-sections-list.component.scss'
})
export class HomeSectionsListComponent {
  protected env = environment;
  @Input() sectionsData!: homeSection[];
  @Input() additionalClasses?: string;
}
