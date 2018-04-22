import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post: Post;
  form: FormGroup;

  constructor(
      private blogService: BlogService, 
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
    ) { this.createForm(); }

  createForm():void {
    this.form = this.formBuilder.group({
      title: '',
      body: '',
    });
  } 

  // Get the corresponding post to edit based on given url
  getPost(): void {
    // Save the current first if it was modified
    if (this.post && this.form.dirty)
      this.save();
    // Getting new post based on the url
    let pid = +this.route.snapshot.paramMap.get('id');
    let wantedPost = this.blogService.getPost(pid);
    if (wantedPost == null) // Redirect to list view in case bad postid
      this.router.navigate(['/']);
    else // Assign this.post to the found post
      this.post = wantedPost;
  }

  // Save the current post to localStorage then disable save button
  @HostListener('window:unload')
  save(): void {
    this.blogService.updatePost(this.post);
    this.form.markAsPristine();
  }

  // Delete the current post and redirect to list view 
  delete(): void {
    this.blogService.deletePost(this.post.postid);
    this.router.navigate(['/']);
  }

  // Preview the current post
  preview(): void {
    this.router.navigate(['preview', this.post.postid]);
  }

  ngOnInit() {
    this.route.params.subscribe(() => this.getPost());
  }

  ngOnDestroy() {
    if (this.form.dirty)
      this.save();
  }
}