import { Component } from '@angular/core';
import { Bike } from '../bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  bikes: Bike[] = [
    { name: 'Bike 1', imageUrl: 'assets/bike1.jpg', model: 'Mountain Bike', color: 'Red', price: 1200,specification:'good bike' },
    { name: 'Bike 2', imageUrl: 'assets/bike2.jpg', model: 'Road Bike', color: 'Blue', price: 1500,specification:'good bike' },
    { name: 'Bike 3', imageUrl: 'assets/bike3.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Bike 5', imageUrl: 'assets/bike5.jpg', model: 'Mountain Bike', color: 'Red', price: 1200 ,specification:'good bike'},
    { name: 'Bike 6', imageUrl: 'assets/bike6.jpg', model: 'Road Bike', color: 'Blue', price: 1500,specification:'good bike' },
    { name: 'Bike 7', imageUrl: 'assets/bike7.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Honda Dio', imageUrl: 'assets/dioh.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Hero Duet', imageUrl: 'assets/duet.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Activa Honda', imageUrl: 'assets/activa.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Access 125', imageUrl: 'assets/access.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'Fasino', imageUrl: 'assets/fasino.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    { name: 'StreetRally', imageUrl: 'assets/streetrally.jpg', model: 'Hybrid Bike', color: 'Green', price: 1000,specification:'good bike' },
    // Add more bikes as needed
  ];

  constructor(private router: Router) {}

  gotobuy(){
    this.router.navigate(['/buy']);
  }
}
