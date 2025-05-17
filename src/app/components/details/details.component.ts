import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, OnDestroy {

  route: ActivatedRoute = inject (ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  formAngular = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
  formSubmitted = false;
  formWasValid = false;

  ngOnInit() {
    console.log('Componente inicializado');
  }

  ngOnChanges() {
    console.log('Propiedades cambiadas')
  }

  ngOnDestroy() {
    console.log('Componente destruido')
  }


  onSubmit() {
    this.formSubmitted = true;
    this.formWasValid = this.formAngular.valid;
    if (this.formAngular.valid) {
      // Lógica cuando el formulario es válido
      this.housingService.submitApplication(
      this.formAngular.value.firstName ?? '',
      this.formAngular.value.lastName ?? '',
      this.formAngular.value.email ?? '',
    )
    } 
    else {
      // Si es inválido, Angular marcará los controles como "touched"
      this.formAngular.markAllAsTouched();
    }
    
  }
  
}
