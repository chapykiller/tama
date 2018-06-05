import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from "../authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  renderPet: boolean;

  constructor(private auth: AuthenticationService) {
    this.renderPet = true;
  }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

}
