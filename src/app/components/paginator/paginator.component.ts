import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/models/page.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() pagination: Page;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.pagination);
  }

  nextPage() {
    if (this.pagination.currentPage < this.pagination.totalPages) {
      this.router.navigate([''], {queryParams: {page: 1 + (+ this.pagination.currentPage)}, queryParamsHandling: 'merge'});
      this.pagination.currentPage++;
    }
  }

  previousPage() {
    if (this.pagination.currentPage > 1) {
      this.router.navigate([''], {queryParams: {page: this.pagination.currentPage - 1}, queryParamsHandling: 'merge'});
      this.pagination.currentPage--;
    }
  }
}
