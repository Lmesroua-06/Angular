import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { Post } from '../types.ts/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(): void{
    this.placeholderService.getPosts() // this line return an observable
      .subscribe(data => { // we subscribe to an observable to see if it get info
        console.log(data);
        this.posts = data;
      });
  }

}



