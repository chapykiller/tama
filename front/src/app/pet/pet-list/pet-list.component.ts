import { Component, OnInit } from '@angular/core';
import { PetDetails, PetService } from "../pet.service";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  petList: PetDetails[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.petService.getPetList().subscribe((pets: PetDetails[]) => {
      this.petList = pets;
    });
  }

  feed(petId: String) {
    var index = this.petList.findIndex( (pet) => pet._id === petId);

    this.petService.feedPet(this.petList[index]).subscribe((pet: PetDetails) => {
      this.petList[index] = pet;
    });
  }

  delete(petId: String) {
    var index = this.petList.findIndex((pet) => pet._id === petId);

    this.petService.deletePet(this.petList[index]).subscribe((pets: PetDetails[]) => {
      this.petList = pets;
    });
  }

}
