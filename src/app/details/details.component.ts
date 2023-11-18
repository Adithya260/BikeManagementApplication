import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
// details.component.ts


bike: Bike = { name: '', imageUrl: '', model: '', color: '', price: 0 ,specification:''};

constructor(private route: ActivatedRoute, private router: Router) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.bike = {
      name: params.get('name') || '',
      imageUrl: params.get('imageUrl') || '',
      model: params.get('model') || '',
      color: params.get('color') || '',
      price: parseInt(params.get('price') || '0', 10),
      specification: params.get('specification') || '',
    };
  });
}

closeDetails(): void {
  this.router.navigate(['/buy']);
}
Buy():void{
alert("If u interested then contact us");
this.router.navigate(['/contact']);

}
}












