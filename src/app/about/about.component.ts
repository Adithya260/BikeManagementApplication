import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bikes: Bike[] = [
    { name: 'Bike 1', imageUrl: 'assets/bike1.jpg', model: 'Mountain Bike', color: 'Red', price: 1200,specification:'good bike' },
    { name: 'Bike 2', imageUrl: 'assets/bike2.jpg', model: 'Road Bike', color: 'Blue', price: 1500,specification:'good bike' },
    { name: 'Bike 3', imageUrl: 'assets/bike3.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Bike 5', imageUrl: 'assets/bike5.jpg', model: 'Mountain Bike', color: 'Red', price: 1200 ,specification:'good bike'},
    { name: 'Bike 6', imageUrl: 'assets/bike6.jpg', model: 'Road Bike', color: 'Blue', price: 1500,specification:'good bike' },
    { name: 'Bike 7', imageUrl: 'assets/bike7.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    // Add more bikes as needed
  ];

  constructor(private router: Router) {}

  showDetails(bike: Bike): void {
    this.router.navigate(['/details', { ...bike }]);

}
}
