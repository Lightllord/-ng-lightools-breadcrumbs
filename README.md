# @ng-lightools/breadcrumbs

## Breadcrumbs for angular 5

Auto generating breadcrumb for Angular 5

# Install

```shell
npm i @ng-lightools/breadcrumbs
```

# API

## Inputs

| Input | Default |
| ----- | ------- |
| [divider] | '/' |

## Usages

Just put that into ur code:

```html
<light-breadcrumbs></light-breadcrumbs>
```

Don't forget import BreadcrumbsModule.

---

To define titles for breadcrumbs in data sections of Routes put titles:

```js
const appRoutes: Routes = [{
  path: 'path1',
  component: Comp1Component,
  data: {
   title: 'title1',
   matrixParams: ['param']
  }
}]
```

now `title1` is matching to router path `./path1`

### Matrix params

If you want _matrix params_ to be visible for breadcrumbs, you should specify this on a _router data_ explicitly, like in example above.
It'll allow you to navigate via breadcrumbs without loosing matrix params which don't need to be defined in route declaration by default.


### Template

If you are going to draw the BC by yourself:

```html
  <app-breadcrumbs>
    <ng-template let-item="item">
      <p style="color: red">{{item.label}}</p>
      {{item | json}}
    </ng-template>
  </app-breadcrumbs>
```

`item` is a `IBreadcrumb`

 ```js
interface IBreadcrumb {
  label: string;         // label which defined in router data
  queryParams?: Params;  // query params
  matrixParams?: Params; // matrix params, whose existence must be defined in router data
  url?: any[];           // generated url
  position?: number;     // position of breadcrumb, start from 0
}
```

### Side effect

Sometimes you will should specify title as `null` or `undefined`.
It happens when you build a route construction like that:

```js
const appRoutes: Routes = [{
    path: 'path1', // route 1
    data: {
      title: 'tasks'
    },
    resolve: {
      tree: FilterTreeService
    },
    children: [{
        path: '', // route 2
        component: TasksListComponent,
        data: {
          title: null
        }
    }]
}]
```

Cause the route1 is like the route2 (path = `/path1`) the title in breadcrumbs might repeats.

_Just specify title by `null` at any route that you don't want to see in breadcrumbs_
