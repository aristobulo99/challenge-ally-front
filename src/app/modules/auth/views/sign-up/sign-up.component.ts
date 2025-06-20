import { Component, OnInit } from '@angular/core';
import { SimpleCardComponent } from '../../../../shared/components/atoms/simple-card/simple-card.component';
import { InputComponent } from '../../../../shared/components/atoms/input/input.component';
import { ButtonComponent } from '../../../../shared/components/atoms/button/button.component';
import { FormControlPipe } from '../../../../shared/pipes/fomr-control.pipe';
import { InputsContent } from '../../../../shared/interfaces/input.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../shared/utils/form-validator';
import { CreateUser, User } from '../../../../shared/interfaces/user.interface';
import { LoadingService } from '../../../../shared/services/loading/loading.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { ToastsService } from '../../../../shared/services/toasts/toasts.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    SimpleCardComponent,
    InputComponent,
    ButtonComponent,
    FormControlPipe
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  protected inputsFormSignUp: InputsContent[][] = [
    [
      {
        type: 'text',
        label: 'Nombre',
        placeholder: 'Ej. Juan',
        formControlName: 'name'
      },
      {
        type: 'text',
        label: 'Apellido',
        placeholder: 'Ej. Pérez Gómez',
        formControlName: 'lastName'
      }
    ],
    [
      {
        type: 'email',
        label: 'Correo electrónico',
        placeholder: 'Ej. juan.perez@email.com',
        formControlName: 'email'
      }
    ],
    [
      {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Mínimo 6 caracteres',
        formControlName: 'password'
      },
      {
        type: 'password',
        label: 'Confirmar contraseña',
        placeholder: 'Vuelve a escribir la contraseña',
        formControlName: 'confirmPassword'
      }
    ]
  ];
  protected formSignUp: FormGroup = new FormGroup({});
  protected user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingService: LoadingService,
    private userService: UserService,
    private toastsService: ToastsService
  ){}

  ngOnInit(): void {
    this.initFormSignUp();
  }

  initFormSignUp(): void {
    this.formSignUp = this.fb.group(
      {
        name: new FormControl<string>('', [Validators.required]),
        lastName: new FormControl<string>('', [Validators.required]),
        password: new FormControl<string>('', [Validators.required]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
      },
      {
        validators: passwordMatchValidator
      }
    )
  }

  async onCreateUser(){
    if(this.formSignUp.invalid) return;

    this.loadingService.setControlLoading(true);

    const userData: CreateUser = {
      names: (this.formSignUp.get('name')?.value as string).trim().toUpperCase(),
      lastNames: (this.formSignUp.get('lastName')?.value as string).trim().toUpperCase(),
      email: (this.formSignUp.get('password')?.value as string).trim(),
      password: (this.formSignUp.get('email')?.value as string).trim(),
    }

    try{
      this.user = await this.userService.postUser(userData);
    }catch(e){
      console.warn(e);
    }finally{
      this.loadingService.setControlLoading(false);
      if(this.user){
        this.toastsService.setControlToasts(
          {
            active: true,
            duration: 3000,
            message: `Creación de usuario ${this.user.email} exitoso`
          }
        );
        this.formSignUp.reset();
        await this.onLogin();
      }
    }
  }

  async onLogin(): Promise<void>{
    await this.router.navigate(['auht/login'])
  }
}
