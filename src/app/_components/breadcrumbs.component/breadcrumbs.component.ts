import { Component, OnInit }                     from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location }                              from '@angular/common';
import { filter                                } from 'rxjs/operators';

import { BreadcrumbItem }                        from '@app/_models/breadcrumb-item';


@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
    static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    readonly home = { label: 'Home', url: '/' };
    menuItems: BreadcrumbItem[];


    constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }


    ngOnInit(): void {
        this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
    }


    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbItem[] = []): BreadcrumbItem[] {
        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
          return breadcrumbs;
        }

        for (const child of children) {
          const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
          if (routeURL !== '') {
            url += `/${routeURL}`;
          }

          const label = child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB];
          if ((label !== null) && (label !== undefined)) {
            breadcrumbs.push({label, url});
          }

          return this.createBreadcrumbs(child, url, breadcrumbs);
        }
    }


    goBack() {
        let currentPath = this.location.path();

        if (currentPath && (currentPath !== '/') && (currentPath.length > 0)) {
          this.location.back();
        }
    }
}
