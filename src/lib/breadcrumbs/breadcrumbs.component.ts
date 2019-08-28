import {Component, ContentChildren, Input, TemplateRef} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {cloneDeep, isEmpty} from 'lodash';

export interface IBreadcrumb {
  label: string;
  queryParams?: Params;
  matrixParams?: Params;
  url?: any[];
  position?: number;
}

@Component({
  selector: 'light-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  @ContentChildren(TemplateRef, {read: TemplateRef}) crumps;
  @Input() divider = '/';
  public breadcrumbs: IBreadcrumb[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.breadcrumbs = [];
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        this.breadcrumbs = [];
        const root: ActivatedRoute = this.activatedRoute.root;
        this.getBreadcrumbs(root);
      });

  }

  private getBreadcrumbs(route: ActivatedRoute, url: any[] = ['/']) {
    const ROUTE_DATA_BREADCRUMB = 'title';
    const ROUTE_DATA_MATRIX_PARAMS = 'matrixParams';
    const ROUTE_DATA_LINK = 'link';
    const ROUTE_DATA_TITLES = 'titles';

    // добавляем урлку по path роута
    const tempUrl = route.snapshot.url.map(segment => segment.path).join('/');
    if (tempUrl) {
      url.push(...tempUrl.split('/'));
    }

    // смотрим и добавляем только те матричные параметры,
    // что указаны в ROUTE_DATA_MATRIX_PARAMS текущего роута
    if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_MATRIX_PARAMS) && route.snapshot.data[ROUTE_DATA_MATRIX_PARAMS]) {
      let matParamsData = route.snapshot.data[ROUTE_DATA_MATRIX_PARAMS];
      let matParams = {};
      matParamsData.forEach(el => {
        if (route.snapshot.params.hasOwnProperty(el)) {
          matParams[el] = route.snapshot.params[el];
        }
      });
      if (!isEmpty(matParams)) {
        url.push(matParams);
      }
    }

    let found = false;
    if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_TITLES)) {
      const titles = route.snapshot.data[ROUTE_DATA_TITLES];
      if (titles && titles.length > 0) {
        const title = titles.find(el => {
          if (el.param) {
            const param = route.snapshot.params[el.param];
            if (param && param === el.value) {
              return true;
            }
          }
          return false;
        });
        if (title) {
          let brdc: IBreadcrumb = {
            label: title.name,
            url: [...url]
          };
          this.breadcrumbs.push(cloneDeep(brdc));
          found = true;
          this.breadcrumbs.forEach((b, ind) => {
            b.position = ind;
          });
        }
      }
    }
    if (route.snapshot.data[ROUTE_DATA_LINK]) {
      url = [];
      url.push(...route.snapshot.data[ROUTE_DATA_LINK].split('/'));
    }
    if (!found && route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB) && route.snapshot.data[ROUTE_DATA_BREADCRUMB]) {
      let brdc: IBreadcrumb = {
        label: route.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: [...url]
      };
      this.breadcrumbs.push(cloneDeep(brdc));
      this.breadcrumbs.forEach((b, ind) => {
        b.position = ind;
      });
    }
    if (route.firstChild) {
      this.getBreadcrumbs(route.firstChild, url);
    }
  }
}
