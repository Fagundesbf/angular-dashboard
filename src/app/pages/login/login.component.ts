import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {

    this.userForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      manterConectado: ['']
    });

    }
    get usuario() {
      return this.userForm.get('usuario');
    }
    get senha() {
      return this.userForm.get('senha');
    }
    get manterConectado() {
      return this.userForm.get('manterConectado');
    }

    ngOnInit(): void {
    }

    submit(form:any) {
      this.isSubmitted = true;
      if (form.status == 'VALID') {
          if(this.userForm.controls['usuario'].value == "admin" && this.userForm.controls['senha'].value == "admin" ){
               this.router.navigate(['home']);
          }else{
            alert('Usuário não encontrado!');
          }
      }
    }


}
