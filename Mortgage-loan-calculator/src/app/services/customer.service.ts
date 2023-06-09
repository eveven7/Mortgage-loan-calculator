import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  customerUrl =
    'https://mortgage-loan-calculator-back-end.onrender.com/customers';

  public getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  public saveCustomerInfo(customer: Customer) {
    return this.http.post<Customer>(this.customerUrl, customer);
  }
}
