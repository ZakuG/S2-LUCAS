import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, CurrencyPipe, NgIf],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: Housinglocation;
}
