import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import * as jwtDecode from 'jwt-decode';
import { config } from './config';

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;

  constructor(pid, created, modified, title, body) {
    this.postid = pid;
    this.created = created;
    this.modified = modified;
    this.title = title;
    this.body = body;
  }
}

@Injectable()
export class BlogService {
  private user: string;
  private posts: Post[];
  private httpRequestFailed: boolean;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.user = null;
    this.posts = [];
    this.fetchPosts();
  }

  private findCookie(cookies: string[]): string {
    for (let cookie of cookies) {
      let name = cookie.split('=')[0];
      if (name == config.jwtCookie)
        return cookie.split('=')[1];
    }
    return null;
  }

  // Populates the posts property by retrieving all posts of current user
  fetchPosts(): void {
    // Get cookie and decode it
    // document.cookie shouldn't be null since user is required to login first
    let cookies = document.cookie.split(';');
    let jwtCookie = this.findCookie(cookies);
    const decoded = jwtDecode(jwtCookie);
    // Get posts corresponding to username from decoded token through api
    this.user = decoded.usr;
    this.http.get<Post[]>(config.apiUrl + this.user)
    .subscribe(posts => posts.forEach(post => this.posts.push(post)));
  }

  // Return posts
  getPosts(): Post[] {
    return this.posts;
  }

  // Return a post given its id
  getPost(pid: number): Post {
    for (let post of this.posts) {
      if (post.postid == pid)
        return post;
    }
    return null;
  }

  // Return a newly created post
  newPost(): Post {
    let postNum = this.posts.length;
    let nextPID = (postNum == 0) ? 1 : (this.posts[postNum-1].postid + 1);
    let now = new Date();
    // Create new post
    let newPost = new Post(nextPID, now, now, "", "");
    // Add to posts
    this.posts.push(newPost);
    // Create new post at server through api
    this.http.post(config.apiUrl + this.user + '/' + nextPID, newPost, { responseType: 'text' })
    .subscribe(
      res => {},
      err => {
        this.posts.pop();
        window.alert("Error creating post at server");
        this.router.navigate(['/']); 
      }
    );
    return newPost;
  }

  // Update the given post
  updatePost(anotherPost: Post): void {
    for (let post of this.posts) {
      if (post.postid == anotherPost.postid) {
        // Update modified time, title and body
        let now = new Date();
        post.modified = now;
        post.title = anotherPost.title;
        post.body = anotherPost.body;
        // Update to server through api
        this.http.put(config.apiUrl + this.user + '/' + post.postid, post, { responseType: 'text' })
        .subscribe(
          res => {},
          err => {
            window.alert("Error updating post at server");
            this.router.navigate(['edit', post.postid]);
          }
        );
        return;
      }
    }
  }  

  // Delete a post
  deletePost(pid: number): void {
    // Delete post with corresponding pid
    for (let post of this.posts) {
      if (post.postid == pid) {
        this.posts.splice(this.posts.indexOf(post), 1);
        // Delete post at server through api
        this.http.delete(config.apiUrl + this.user + '/' + post.postid, { responseType: 'text' })
        .subscribe(
          res => {},
          err => {
            window.alert("Error deleting post at server");
            this.router.navigate(['/']);
          }
        );
      }
    }
  }
}