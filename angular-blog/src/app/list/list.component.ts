import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: Post[];

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  create(): void {
    let newPost = this.blogService.newPost();
    this.router.navigate(['edit', newPost.postid]);
  }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }
}
