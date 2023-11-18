import { Component } from '@angular/core';
import { EmiService } from '../emi.service';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  loanAmount: number = 100000;
  interestRate: number = 10;
  tenureYears: number = 1;

  emiResults: { months: number, emi: number }[] = [];

  constructor(private emiService: EmiService) {}

  calculateEMI() {
    // Clear previous results
    this.emiResults = [];
  
    // Convert tenureYears to tenureMonths
    const tenureMonths = this.tenureYears * 12;


    if (tenureMonths < 12 || tenureMonths > 84) {
      alert('Tenure should be between 1 and 7 years.');
      return;
    }
  
    // Display calculated EMIs for different tenures
    for (let months = 12; months <= tenureMonths; months += 12) {
      const emi = this.emiService.calculateEmi(this.loanAmount, this.interestRate, months);
      this.emiResults.push({ months, emi });
    }

}
}
