(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@ng-lightools/breadcrumbs', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ng-lightools'] = global['ng-lightools'] || {}, global['ng-lightools'].breadcrumbs = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent.decorators = [
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    BreadcrumbsComponent
                ],
                exports: [
                    BreadcrumbsComponent
                ]
            },] },
];

exports.BreadcrumbsModule = BreadcrumbsModule;
exports.ɵa = BreadcrumbsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-lightools-breadcrumbs.umd.js.map
