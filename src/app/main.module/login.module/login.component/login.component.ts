import { Component, OnInit }                  from '@angular/core';
import { Router, ActivatedRoute }             from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first }                              from 'rxjs/operators';

import { AuthService }                        from '@app/_auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
        loginForm: FormGroup;
        returnUrl: string;
        loading   = false;
        submitted = false;
        error     = '';

        
        constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService) { 
                if (this.authService.userValue) { 
                    this.router.navigate(['/']);
                }
        }


        ngOnInit() {
                this.loginForm = this.formBuilder.group({
                    username: ['ArteneR', Validators.required],
                    password: ['Amiga1200', Validators.required]
                });

                this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/recipes';
        }


        get f() { 
                return this.loginForm.controls; 
        }


        onSubmit() {
                this.submitted = true;

                if (this.loginForm.invalid) {
                    return;
                }

                this.loading = true;
                this.authService.login(this.f.username.value, this.f.password.value)
                    .pipe(first())
                    .subscribe({
                        next: () => {
                            this.router.navigate([this.returnUrl]);
                        },
                        error: error => {
                            this.error = error;
                            this.loading = false;
                        }
                    });
        }
}
