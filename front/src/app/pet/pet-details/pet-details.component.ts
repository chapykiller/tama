import { Component, OnInit, Input } from '@angular/core';
import { PetDetails } from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  @Input() petDetails: PetDetails;

  constructor() { }

  ngOnInit() {
  }

}
