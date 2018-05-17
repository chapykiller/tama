import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    username: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigate(['../login'], {relativeTo: this.route});
    }, (err) => {
      console.error(err);
    });
  }
}
