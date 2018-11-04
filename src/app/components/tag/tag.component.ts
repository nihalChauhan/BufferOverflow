import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag: string;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  toggleTag() {
    console.log(this.route.snapshot.queryParams['tag']);
    if (this.route.snapshot.queryParams['tag'] === this.tag) {
      this.router.navigate([''], {queryParams: {tag: null}, queryParamsHandling: 'merge'});
    } else {
      this.router.navigate([''], { queryParams: { ...this.route.snapshot.queryParams, tag: this.tag } });
    }
  }
}
