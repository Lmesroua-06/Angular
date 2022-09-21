import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable {
    
  }

}
