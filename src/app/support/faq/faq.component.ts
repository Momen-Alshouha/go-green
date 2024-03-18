import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  protected env = environment; 
  faqs = [
    { id: 1, question: 'How Can I Reduce My Carbon Footprint ?', answer: 'To reduce your carbon footprint and live a more sustainable life, consider these steps...', expanded: false },
    { id: 2, question: 'How Can I Make My Home More Environmentally Friendly ?', answer: 'Transforming your home into an eco-friendly space is achievable through these steps...', expanded: false },
    { id: 3, question: 'How Can I Support Sustainable Transportation ?', answer: 'Adopting sustainable transportation practices can significantly reduce your environmental impact. Here are some ways to support sustainable transportation...', expanded: false },
    { id: 4, question: 'How Can I Reduce Waste in My Daily Life ?', answer: 'Reducing waste is essential for a sustainable lifestyle. Here are some tips to minimize waste...', expanded: false },
    { id: 5, question: 'Why Should I Choose Sustainable Products ?', answer: 'Choosing sustainable products benefits both the environment and your health. Here\'s why...', expanded: false },
    { id: 6, question: 'How Can I Save Energy at Home ?', answer: 'Conserving energy at home is key to reducing your carbon footprint. Here are some energy-saving tips...', expanded: false }
  ];  
}
