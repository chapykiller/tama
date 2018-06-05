import { Component, OnInit, Input } from '@angular/core';
import { PetDetails, PetService } from '../pet.service';
import { PetListComponent } from "../pet-list/pet-list.component";

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {

  types = ['cat', 'dog'];

  @Input() petList: PetListComponent;

  pet: PetDetails = {
    _id: null,
    age: null,
    hunger: null,
    name: null,
    type: this.types[0]
  };

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  create() {
    this.petService.createPet(this.pet).subscribe( (petTemp: PetDetails) => {
      this.pet.name = null;
      this.pet.type = this.types[0];

      this.petList.loadPets();
    });
  }

}
