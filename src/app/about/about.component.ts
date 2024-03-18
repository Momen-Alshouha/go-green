import { Component } from '@angular/core';
import { AboutInfoComponent } from './about-info/about-info.component';
import { homeSection } from '../intefaces/home-section';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutInfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  data: homeSection[] = [
    {
      images: ['icon1.svg'],
      text: ' Utilizing technology for sustainable, and interconnected urban mobility',
      title: 'Smart Transit',
    },
    {
      images: ['icon2.svg'],
      text: 'Efficient, green transit planning encouraging sustainable, urban mobility.',
      title: 'Clean Mobility',
    },
    {
      images: ['icon3.svg'],
      text: 'Environmentally friendly travel choices promoting sustainability and safety.',
      title: 'Greener Journeys',
    },
  ];
}
