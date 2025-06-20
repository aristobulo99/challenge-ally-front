import { Component, OnInit } from '@angular/core';
import { SimpleCardComponent } from '../../../../shared/components/atoms/simple-card/simple-card.component';
import { ButtonComponent } from '../../../../shared/components/atoms/button/button.component';
import { InputComponent } from '../../../../shared/components/atoms/input/input.component';
import { InputsContent } from '../../../../shared/interfaces/input.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlPipe } from '../../../../shared/pipes/fomr-control.pipe';
import { Router } from '@angular/router';
import { LoginData, LoginToken } from '../../../../shared/interfaces/auth.interface';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { ToastsService } from '../../../../shared/services/toasts/toasts.service';
import { LoadingService } from '../../../../shared/services/loading/loading.service';

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
      label: 'Correo electrónico',
      placeholder: 'Ej. juan.perez@email.com',
      formControlName: 'email'
    },
    {
      type: 'password',
      label: 'Contraseña',
      placeholder: 'Mínimo 6 caracteres',
      formControlName: 'password'
    },
  ];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingService: LoadingService,
    private authService: AuthService,
    private toastsService: ToastsService
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

  async onLogin(){
    if(this.longinForm.invalid) return;

    const loginData: LoginData = {
      email: (this.longinForm.get('email')?.value as string).trim(),
      password: (this.longinForm.get('password')?.value as string).trim()
    }

    try{
      this.loadingService.setControlLoading(true);
      const resp: LoginToken = await this.authService.postLogin(loginData);
      localStorage.setItem('token', resp.access_token);
      this.toastsService.setControlToasts(
        {
          message: `Bienvenido ${loginData.email}`,
          active: true,
          type: 'confirm',
          duration: 4000
        }
      )
    }catch(e){
      console.warn(e);
    }finally{
      this.loadingService.setControlLoading(false);
    }
  }

  async onSingUp(){
    await this.router.navigate(['auht/signUp'])
  }

}
