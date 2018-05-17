import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetListComponent } from './pet-list/pet-list.component';

@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule
  ],
  exports: [
    PetListComponent,
    PetDetailsComponent
  ],
  declarations: [PetDetailsComponent, PetListComponent]
})
export class PetModule { }
