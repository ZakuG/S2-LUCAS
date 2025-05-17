import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housinglocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
      date: "2025-05-02",
      type: 'Rent Home',
      cost: 1200,
      rooms: 3,
      bathrooms: 2,
      garaje: 1
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
      date: "2025-04-24",
      type: 'Sold Department',
      cost: 950,
      rooms: 2,
      bathrooms: 1,
      garaje: 0
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
      date: "2025-05-06",
      type: 'Rent Department',
      cost: 800,
      rooms: 1,
      bathrooms: 1,
      garaje: 0
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
      date: "2025-05-04",
      type: 'Sold Home',
      cost: 1300,
      rooms: 4,
      bathrooms: 2,
      garaje: 2
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
      date: "2025-05-10",
      type: 'Rent Home',
      cost: 1000,
      rooms: 3,
      bathrooms: 2,
      garaje: 1
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
      date: "2025-05-12",
      type: 'Sold Department',
      cost: 1100,
      rooms: 2,
      bathrooms: 2,
      garaje: 1
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
      date: "2025-05-13",
      type: 'Rent Department',
      cost: 950,
      rooms: 2,
      bathrooms: 1,
      garaje: 0
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
      date: "2025-05-14",
      type: 'Rent Home',
      cost: 1400,
      rooms: 4,
      bathrooms: 3,
      garaje: 2
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
      date: "2025-05-12",
      type: 'Sold Department',
      cost: 890,
      rooms: 1,
      bathrooms: 1,
      garaje: 0
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
      date: "2025-05-02",
      type: 'Rent Department',
      cost: 980,
      rooms: 3,
      bathrooms: 2,
      garaje: 1
    }
  ];

  getAllHouseingLocations(): Housinglocation[] {
    return this.housinglocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housinglocationList.find(location => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`FirstName: ${firstName} - LastName: ${lastName} - Email: ${email}`);
  }
}
