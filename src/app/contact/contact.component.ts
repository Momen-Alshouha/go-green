import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment.development';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected env = environment;
  @ViewChild('contactForm') form: any;

  onSubmit() {
    if (this.form.valid) {
      this.form.reset();
    }
  }
}
