import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioGroup } from '@angular/material/radio';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {ConfigurableFocusTrapFactory, FocusTrapFactory} from '@angular/cdk/a11y';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatRadioGroup,
    MatSidenavModule, MatRadioModule, ReactiveFormsModule
  ],
  providers: [{provide: FocusTrapFactory, useClass: ConfigurableFocusTrapFactory}],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mode = new FormControl('push' as MatDrawerMode);
  hasBackdrop = new FormControl('null as null | boolean');
  position = new FormControl('end' as 'end' | 'start');

  housinglocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  selectedStatus: string = '';
  selectedType: string = '';
  minRooms: number = 1;

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housinglocationList = this.housingService.getAllHouseingLocations();
    this.filteredLocationList = this.housinglocationList;
  }

  filterResults(city: string) {
    this.filteredLocationList = this.housinglocationList.filter(location => {
      const cityMatch = location.city.toLowerCase().includes(city.toLowerCase());
      const statusMatch = this.selectedStatus ? location.type.toLowerCase().includes(this.selectedStatus.toLowerCase()) : true;
      const typeMatch = this.selectedType ? location.type.toLowerCase().includes(this.selectedType.toLowerCase()) : true;
      const roomsMatch = location.rooms >= this.minRooms;

      return cityMatch && statusMatch && typeMatch && roomsMatch;
    });
  }
}


