import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  keyword: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toggleQuery() {
    this.router.navigate([''], { queryParams: { ...this.route.snapshot.queryParams, keyword: this.keyword } });
  }

  resetQuery() {
    this.router.navigate([''], {queryParams: {keyword: null}, queryParamsHandling: 'merge'});
    this.keyword = '';
  }

}
