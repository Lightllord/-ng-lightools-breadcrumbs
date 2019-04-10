import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-breadcrumbs',
                template: "<p>\n  breadcrumbs works!\n</p>\n",
                styles: [""]
            },] },
];
BreadcrumbsComponent.ctorParameters = function () { return []; };
var BreadcrumbsModule = /** @class */ (function () {
    function BreadcrumbsModule() {
    }
    return BreadcrumbsModule;
}());
BreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    BreadcrumbsComponent
                ],
                exports: [
                    BreadcrumbsComponent
                ]
            },] },
];

export { BreadcrumbsModule, BreadcrumbsComponent as ɵa };
//# sourceMappingURL=ng-lightools-breadcrumbs.js.map
