import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  isLoading = false; // Add this

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.isLoading = true; // Start loading
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
          this.submitted = false;
          this.isLoading = false; // Stop loading
        },
        error: () => {
          this.errorMessage = 'Failed to send message. Please try again.';
          this.isLoading = false; // Stop loading
        }
      });
    }
  }
}