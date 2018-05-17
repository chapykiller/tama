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
    this.petService.getPetList().subscribe((pets: PetDetails[]) => {
      this.petList = pets;
    });
  }

}
