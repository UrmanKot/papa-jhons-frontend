import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '#shared/auth/auth.service';
import {LoginUserInput} from '#shared/graphql';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoading = false;

  form: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const loginUserInput: LoginUserInput = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };

    this.auth.logIn(loginUserInput).subscribe(
      () => this.router.navigateByUrl(this.auth.wantedUri ?? '/'),
    )
  }

}
