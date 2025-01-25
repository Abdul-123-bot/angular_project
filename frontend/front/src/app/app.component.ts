import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // Mark this component as standalone
  imports: [BrowserModule, ReactiveFormsModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with controls
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}
