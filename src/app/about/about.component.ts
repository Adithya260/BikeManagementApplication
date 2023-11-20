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
    { name: 'Yamaha MT', imageUrl: 'assets/bike1.jpg', model: 'Yamaha MT-155', color: 'Variant Colors(Red,Blue,Black,White)', price: 1200,
    specification:'The Yamaha MT 15 is powered by a 155 cc air-cooled engine which produces 18.4 PS @ 10000 rpm of power. It has a fuel tank of 10 L and a claimed mileage of 56.87 kmpl. The Yamaha MT 15 starts at Rs 1.67 and goes up to Rs 1.73 Lakh (ex-showroom, Delhi). It is available in three variants.' },
    { name: 'Duke', imageUrl: 'assets/bike2.jpg', model: 'KTM Duke-390', color: 'Variant Colors(Red,Blue,Black,White)', price: 1500,
    specification:'KTM 390 Duke is a motorcycle with a starting price of Rs 3.11 Lakh. It is available in India in 1 variant and 2 colours with high end variant price starting from Rs 3.11 Lakh. 390 Duke is powered by a 399 ccbs6-2.0 engine which develops a power of 46 PS and a torque of 39 Nm. It has Disc front brakes and Disc rear brakes. The weight of KTM 390 Duke is 168 kg and comes with a fuel tank capacity of 15 L.' },
    { name: 'NS 200', imageUrl: 'assets/bike3.jpg', model: 'Pulsar NS 200', color: 'Variant Colors(Red,Blue,Black,White)', price: 1000,
    specification:'Bajaj Pulsar NS200 is a motorcycle with a starting price of Rs 1.49 Lakh. It is available in India in 1 variant and 4 colours with high end variant price starting from Rs 1.49 Lakh. Pulsar NS200 is powered by a 199 ccbs6-2.0 engine which develops a power of 24.5 PS and a torque of 18.74 Nm. It has Disc front brakes and Disc rear brakes. The weight of Bajaj Pulsar NS200 is 158 kg and comes with a fuel tank capacity of 12 L.' },
    { name: 'Bullet350', imageUrl: 'assets/bike5.jpg', model: 'Bullet Classic 350', color: 'Variant Colors(Red,Blue,Black,White)', price: 1800 ,
    specification:'Royal Enfield Bullet 350 is a motorcycle with a starting price of Rs 1.74 Lakh. It is available in India in 3 variants and 5 colours with high end variant price starting from Rs 2.16 Lakh. Bullet 350 is powered by a 349 ccbs6 engine which develops a power of 20.4 PS and a torque of 27 Nm. It has Disc front brakes and Disc rear brakes. The weight of Royal Enfield Bullet 350 is 195 kg and comes with a fuel tank capacity of 13 l.'},
    { name: 'R15-v4', imageUrl: 'assets/bike6.jpg', model: 'Yamaha R15', color: 'Variant Colors(Red,Blue,Black,White)', price: 1500,
    specification:'Yamaha R15 V4 is a motorcycle with a starting price of Rs 1.82 Lakh. It is available in India in 6 variants and 7 colours with high end variant price starting from Rs 1.97 Lakh. R15 V4 is powered by a 155 ccbs6 engine which develops a power of 18.4 PS and a torque of 14.2 Nm. It has Disc front brakes and Disc rear brakes. The weight of Yamaha R15 V4 is 142 kg and comes with a fuel tank capacity of 11 L.' },
    { name: 'RS 200', imageUrl: 'assets/bike7.jpg', model: 'Bajaj Pulasr RS 200', color: 'Variant Colors(Red,Blue,Black,White)', price: 1000,
    specification:'Bajaj Pulsar RS200 is a motorcycle with a starting price of Rs 1.72 Lakh. It is available in India in 1 variant and 3 colours with high end variant price starting from Rs 1.72 Lakh. Pulsar RS200 is powered by a 199.5 ccbs6-2.0 engine which develops a power of 24.5 PS and a torque of 18.7 Nm. It has Disc front brakes and Disc rear brakes. The weight of Bajaj Pulsar RS200 is 166 kg and comes with a fuel tank capacity of 13 L.' },
    // Add more bikes as needed
  ];

  constructor(private router: Router) {}

  showDetails(bike: Bike): void {
    this.router.navigate(['/details', { ...bike }]);

}
}
