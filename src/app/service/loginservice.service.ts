import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  API_KEY = 'YOUR_API_KEY';
  constructor(private http:HttpClient) { }
public getNews(){
  return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&amp;apiKey=${this.API_KEY}`);
}
}
