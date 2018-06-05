import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PetDetails } from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  @Input() petDetails: PetDetails;
  @Input() petIndex: number;
  @Output() feedEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  feed() {
    this.feedEmitter.emit(this.petDetails._id);
  }

  delete() {
    this.deleteEmitter.emit(this.petDetails._id);
  }

}
