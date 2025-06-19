import { Component, OnInit } from '@angular/core';
import { SimpleCardComponent } from '../../../../shared/components/atoms/simple-card/simple-card.component';
import { ButtonComponent } from '../../../../shared/components/atoms/button/button.component';
import { InputComponent } from '../../../../shared/components/atoms/input/input.component';
import { InputsContent } from '../../../../shared/interfaces/input.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlPipe } from '../../../../shared/pipes/fomr-control.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SimpleCardComponent,
    InputComponent,
    ButtonComponent,
    FormControlPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  protected longinForm: FormGroup = new FormGroup({});
  protected inpustLogin: InputsContent[] = [
    {
      type: 'email',
      label: 'Email',
      placeholder: 'ejemplo@dominio.com',
      formControlName: 'email'
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: '',
      formControlName: 'password'
    },
  ];


  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void{
    this.longinForm = this.fb.group({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
    })
  }

  async onSingUp(){
    await this.router.navigate(['auht/signUp'])
  }

}
