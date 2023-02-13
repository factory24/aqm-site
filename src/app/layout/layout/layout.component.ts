import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  // @ViewChild('mobileMenuTrigger', { static: true })
  // mobileMenuTrigger: ElementRef;
  mobileViewClass = 'mobile-menu-overlay';
  activeFragment = this.activatedRoute.fragment.pipe(share());

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((route) => {
      this.scrollTo(route ?? '');
      this.hideMobileView();
    });
  }

  scrollTo(route: string): void {
    this.document.getElementById(route)?.scrollIntoView({ behavior: 'smooth' });
  }

  showMobileView(): void {
    this.mobileViewClass = 'mobile-menu-overlay active';
    this.document.body.classList.add('no-overflow');
  }

  hideMobileView(): void {
    this.mobileViewClass = 'mobile-menu-overlay';
    this.document.body.classList.add('no-overflow');
  }

  routeUrl(url: string): void {
    this.router.navigate([url]);
    this.hideMobileView();
  }
}
