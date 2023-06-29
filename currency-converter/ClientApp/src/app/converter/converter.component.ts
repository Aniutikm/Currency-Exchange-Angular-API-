import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  selectedCurrency1 = 'UAH';
  selectedCurrency2 = 'USD';
  inputValue: number = 0;
  convertedValue: number = 0;

  convertCurrency(): void {
    
    const usdRate = 0.0271; 
    const eurRate = 0.0247; 

    if (this.selectedCurrency1 === 'UAH' && this.selectedCurrency2 === 'USD') {
      this.convertedValue = this.inputValue * usdRate;
    } else if (this.selectedCurrency1 === 'USD' && this.selectedCurrency2 === 'UAH') {
      this.convertedValue = this.inputValue / usdRate;
    } else if (this.selectedCurrency1 === 'UAH' && this.selectedCurrency2 === 'EUR') {
      this.convertedValue = this.inputValue * eurRate;
    } else if (this.selectedCurrency1 === 'EUR' && this.selectedCurrency2 === 'UAH') {
      this.convertedValue = this.inputValue / eurRate;
    } else if (this.selectedCurrency1 === 'USD' && this.selectedCurrency2 === 'EUR') {
      this.convertedValue = (this.inputValue / usdRate) * eurRate;
    } else if (this.selectedCurrency1 === 'EUR' && this.selectedCurrency2 === 'USD') {
      this.convertedValue = (this.inputValue / eurRate) * usdRate;
    } else {
      this.convertedValue = this.inputValue;
    }
  }
}

