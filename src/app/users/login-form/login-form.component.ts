import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nm-login-form',
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent implements OnInit {

  userForm: FormGroup;
  newUser: boolean = false; // to toggle login or signup form
  passReset: boolean = false; 


  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  toggleForm(): void {
     this.newUser = !this.newUser;
   }

  signup(): void {
     this.auth.emailSignUp(this.userForm.value['name'],this.userForm.value['email'], this.userForm.value['password'])

    }

   login(): void {
     this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
   
   }

   resetPassword() {
     this.auth.resetPassword(this.userForm.value['email'])
     .then(() => this.passReset = true)
   }
   

   buildForm(): void {
     this.userForm = this.fb.group({
       'email': ['', [
           Validators.required,
           Validators.email
         ]
       ],
       'password': ['', [
         Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
         Validators.minLength(6),
         Validators.maxLength(25)
       ]
     ],
     'name': ['', [ ]
     ]
     });

     this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
     this.onValueChanged(); // reset validation messages
   }


   onValueChanged(data?: any) {
     if (!this.userForm) { return; }
     const form = this.userForm;
     for (const field in this.formErrors) {
       // clear previous error message (if any)
       this.formErrors[field] = '';
       const control = form.get(field);
       if (control && control.dirty && !control.valid) {
         const messages = this.validationMessages[field];
         for (const key in control.errors) {
           this.formErrors[field] += messages[key] + ' ';
         }
       }
     }
   }

  formErrors = {
     'email': '',
     'password': ''
   };

   validationMessages = {
     'email': {
       'required':      'E-mail é Obrigatório.',
       'email':         'Deve ser um e-mail válido'
     },
     'password': {
       'required':      'Senha é Obrigatória.',
       'pattern':       'Senha deve conter letras e numeros.',
       'minlength':     'Senha deve ter no minimo 4 caracteres.',
       'maxlength':     'Senha não deve ter mais de 40 caracteres.',
     }
   };


}
