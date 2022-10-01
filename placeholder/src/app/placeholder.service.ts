import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './types.ts/Post';


// most of the time - used to abstract or decouple functionnality to get state/info to your application
@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  // the private: http is the dependency injection 
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.BASE_URL + 'posts');

  }

  updatePost(post: Post){
    return this.http.put<Post>(this.BASE_URL  + "posts/" + post.id , post, this.httpOptions)
  }
}
