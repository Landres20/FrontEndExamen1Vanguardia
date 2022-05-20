import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  baseUrl: string = "https://localhost:44343";
  constructor(private httpClient : HttpClient) { }

  getSummary(accountId : number){
    return this.httpClient.get<Account[]>(`${this.baseUrl}/Api/Transactions/${accountId}`);
  }
}
