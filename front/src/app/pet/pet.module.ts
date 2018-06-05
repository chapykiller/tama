import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PetRoutingModule } from './pet-routing.module';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';

@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule
  ],
  exports: [
    PetListComponent,
    PetDetailsComponent,
    PetCreateComponent
  ],
  declarations: [PetDetailsComponent, PetListComponent, PetCreateComponent]
})
export class PetModule { }
