import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-tags',
  templateUrl: './top-tags.component.html',
  styleUrls: ['./top-tags.component.css']
})
export class TopTagsComponent implements OnInit {
  tags: string[];
  constructor() { }

  ngOnInit() {
    this.tags = ['hello', 'sports'];
  }

}
