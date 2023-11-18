import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiService {
  calculateEmi(loanAmount: number, interestRate: number, tenureMonths: number): number {
    const monthlyInterest: number = interestRate / (12 * 100);
    const denominator: number = Math.pow(1 + monthlyInterest, tenureMonths) - 1;
    const emi: number = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, tenureMonths)) / denominator;
    return emi;
  }
  constructor() { }
}
