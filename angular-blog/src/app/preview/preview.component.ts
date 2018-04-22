import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Parser, HtmlRenderer } from 'commonmark';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  post: Post;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Get the corresponding post to preview based on given url
  getPost(): void {
    let pid = +this.route.snapshot.paramMap.get('id');
    let wantedPost = this.blogService.getPost(pid);
    if (wantedPost == null) // Redirect to list view in case bad postid
      this.router.navigate(['/']);
    else // Assign this.post to the found post
      this.post = wantedPost;      
  }

  // Render markdown into html
  render(content: string): string {
    let reader = new Parser();
    let writer = new HtmlRenderer();
    let parsed = reader.parse(content);
    return writer.render(parsed);
  }

  // Edit the current post
  edit(): void {
    this.router.navigate(['edit', this.post.postid]);
  }

  ngOnInit() {
    this.route.params.subscribe(() => this.getPost());
  }
}