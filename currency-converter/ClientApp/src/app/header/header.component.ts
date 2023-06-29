import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate: number = 0;
  eurRate: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates(): void {
    this.http
      .get<any>('https://api.exchangerate-api.com/v4/latest/UAH')
      .subscribe((data) => {
        this.usdRate = data.rates.USD;
        this.eurRate = data.rates.EUR;
      });
  }
}


