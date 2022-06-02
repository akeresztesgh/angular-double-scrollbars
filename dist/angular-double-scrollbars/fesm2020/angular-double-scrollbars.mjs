import * as i0 from '@angular/core';
import { Injectable, Component, Input, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class AngularDoubleScrollbarsService {
    constructor() { }
}
/** @nocollapse */ AngularDoubleScrollbarsService.ɵfac = function AngularDoubleScrollbarsService_Factory(t) { return new (t || AngularDoubleScrollbarsService)(); };
/** @nocollapse */ AngularDoubleScrollbarsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: AngularDoubleScrollbarsService, factory: AngularDoubleScrollbarsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularDoubleScrollbarsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["mainDiv"];
const _c1 = ["wrapperDiv"];
const _c2 = function (a0) { return { height: a0 }; };
const _c3 = function (a0, a1) { return { "overflow-x": a0, height: a1 }; };
const _c4 = function (a0, a1) { return { width: a0, height: a1 }; };
const _c5 = function (a0) { return { "overflow-x": a0 }; };
const _c6 = ["*"];
class AngularDoubleScrollbarsComponent {
    constructor(cd) {
        this.cd = cd;
    }
    ngOnInit() {
        let barSize = this.getWidth();
        this.nativeScrollBarHeight = barSize + 'px';
        this.scrollBarElementHeight = (barSize + 1) + 'px';
    }
    ngAfterViewInit() {
        this.wrapper2scrollWidth = this.mainDiv.nativeElement.scrollWidth + 'px';
        this.cd.detectChanges();
    }
    onWrapperScroll($event) {
        this.mainDiv.nativeElement.scrollLeft = this.wrapperDiv.nativeElement.scrollLeft;
    }
    onMainScroll($event) {
        this.wrapperDiv.nativeElement.scrollLeft = this.mainDiv.nativeElement.scrollLeft;
    }
    getWidth() {
        var inner = document.createElement('div');
        var outer = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';
        outer.style.width = '200px';
        outer.style.height = '150px';
        outer.style.position = 'absolute';
        outer.style.top = '0';
        outer.style.left = '0';
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'hidden';
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var width1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var width2 = outer.clientWidth;
        document.body.removeChild(outer);
        return (width1 - width2);
    }
}
/** @nocollapse */ AngularDoubleScrollbarsComponent.ɵfac = function AngularDoubleScrollbarsComponent_Factory(t) { return new (t || AngularDoubleScrollbarsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ AngularDoubleScrollbarsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: AngularDoubleScrollbarsComponent, selectors: [["lib-angular-double-scrollbars"]], viewQuery: function AngularDoubleScrollbarsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mainDiv = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapperDiv = _t.first);
    } }, inputs: { doubleScrollBarHorizontal: "doubleScrollBarHorizontal" }, ngContentSelectors: _c6, decls: 7, vars: 14, consts: [[2, "overflow-y", "hidden", 3, "ngStyle"], [2, "overflow-y", "hidden", "position", "relative", "top", "-1px", 3, "ngStyle", "scroll"], ["wrapperDiv", ""], [3, "ngStyle"], [3, "ngStyle", "scroll"], ["mainDiv", ""]], template: function AngularDoubleScrollbarsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1, 2);
        i0.ɵɵlistener("scroll", function AngularDoubleScrollbarsComponent_Template_div_scroll_1_listener($event) { return ctx.onWrapperScroll($event); });
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("scroll", function AngularDoubleScrollbarsComponent_Template_div_scroll_4_listener($event) { return ctx.onMainScroll($event); });
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c2, ctx.nativeScrollBarHeight));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c3, ctx.doubleScrollBarHorizontal == "always" ? "scroll" : "auto", ctx.scrollBarElementHeight));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(9, _c4, ctx.wrapper2scrollWidth, ctx.scrollBarElementHeight));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c5, ctx.doubleScrollBarHorizontal == "always" ? "scroll" : "auto"));
    } }, directives: [i1.NgStyle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularDoubleScrollbarsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-angular-double-scrollbars',
                template: `
      <div style="overflow-y:hidden" [ngStyle]="{height:nativeScrollBarHeight}">
        <div style="overflow-y:hidden;position:relative;top:-1px"
            [ngStyle]="{'overflow-x':doubleScrollBarHorizontal=='always'?'scroll':'auto',height:scrollBarElementHeight}"
            #wrapperDiv (scroll)='onWrapperScroll($event)'>
            <div [ngStyle]="{width:wrapper2scrollWidth,height:scrollBarElementHeight}"></div>
        </div>
      </div>
      <div [ngStyle]="{'overflow-x':doubleScrollBarHorizontal=='always'?'scroll':'auto'}" #mainDiv
        (scroll)='onMainScroll($event)'>
        <ng-content></ng-content>
      </div>`,
                styles: []
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { doubleScrollBarHorizontal: [{
            type: Input,
            args: ['doubleScrollBarHorizontal']
        }], mainDiv: [{
            type: ViewChild,
            args: ['mainDiv', { static: false }]
        }], wrapperDiv: [{
            type: ViewChild,
            args: ['wrapperDiv', { static: false }]
        }] }); })();

class AngularDoubleScrollbarsModule {
}
/** @nocollapse */ AngularDoubleScrollbarsModule.ɵfac = function AngularDoubleScrollbarsModule_Factory(t) { return new (t || AngularDoubleScrollbarsModule)(); };
/** @nocollapse */ AngularDoubleScrollbarsModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: AngularDoubleScrollbarsModule });
/** @nocollapse */ AngularDoubleScrollbarsModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularDoubleScrollbarsModule, [{
        type: NgModule,
        args: [{
                declarations: [AngularDoubleScrollbarsComponent],
                imports: [
                    CommonModule
                ],
                exports: [AngularDoubleScrollbarsComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularDoubleScrollbarsModule, { declarations: [AngularDoubleScrollbarsComponent], imports: [CommonModule], exports: [AngularDoubleScrollbarsComponent] }); })();

/*
 * Public API Surface of angular-double-scrollbars
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularDoubleScrollbarsComponent, AngularDoubleScrollbarsModule, AngularDoubleScrollbarsService };
//# sourceMappingURL=angular-double-scrollbars.mjs.map
