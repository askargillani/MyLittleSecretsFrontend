import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
              CommonModule, 
              HeaderComponent, 
              MatInputModule, 
              FormsModule, 
              ReactiveFormsModule, 
              MatFormFieldModule, 
              MatIconModule,
              MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailAddress = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", Validators.required,)
  hide = true;
}
