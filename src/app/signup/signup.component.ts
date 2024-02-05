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
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, 
    HeaderComponent, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatIconModule,
    MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  emailAddress = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", Validators.required,)
  hide = true;

  constructor(
    private appService: AppServiceService
  ){

  }
  onSubmit() {
    this.appService.signup(this.emailAddress?.value,this.password?.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
}
