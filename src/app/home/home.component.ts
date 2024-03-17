import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { environment } from '../../environments/environment.development';
import { homeSection } from '../intefaces/home-section';
import { HomeSectionsListComponent } from './home-sections-list/home-sections-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HomeSectionsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeSectionsData: homeSection[] = [
    {
      images: ['by.jpeg'],
      title: 'Green Roads Ahead',
      text: 'Driving a sustainable future through eco-friendly transportation solutions and innovation.',
    },
    {
      images: ['image-green.jpg'],
      title: 'Stride into Sustainability',
      text: 'Green Steps Toward Eco-Friendly Walking Solutions',
    },
    {
      images: ['Green-Transit.jpg'],
      title: 'Green Transit',
      text: 'Embark on eco-conscious journeys with our sustainable bus solutions. Redefining transportation.',
    },
  ];
  protected env = environment;
}
