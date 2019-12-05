import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectorRef, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDoubleScrollbarsService {
    constructor() { }
}
AngularDoubleScrollbarsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularDoubleScrollbarsService.ctorParameters = () => [];
/** @nocollapse */ AngularDoubleScrollbarsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularDoubleScrollbarsService_Factory() { return new AngularDoubleScrollbarsService(); }, token: AngularDoubleScrollbarsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDoubleScrollbarsComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let barSize = this.getWidth();
        this.nativeScrollBarHeight = barSize + 'px';
        this.scrollBarElementHeight = (barSize + 1) + 'px';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.wrapper2scrollWidth = this.mainDiv.nativeElement.scrollWidth + 'px';
        this.cd.detectChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onWrapperScroll($event) {
        this.mainDiv.nativeElement.scrollLeft = this.wrapperDiv.nativeElement.scrollLeft;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMainScroll($event) {
        this.wrapperDiv.nativeElement.scrollLeft = this.mainDiv.nativeElement.scrollLeft;
    }
    /**
     * @private
     * @return {?}
     */
    getWidth() {
        /** @type {?} */
        var inner = document.createElement('div');
        /** @type {?} */
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
        /** @type {?} */
        var width1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        /** @type {?} */
        var width2 = outer.clientWidth;
        document.body.removeChild(outer);
        return (width1 - width2);
    }
}
AngularDoubleScrollbarsComponent.decorators = [
    { type: Component, args: [{
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
      </div>`
            }] }
];
/** @nocollapse */
AngularDoubleScrollbarsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
AngularDoubleScrollbarsComponent.propDecorators = {
    doubleScrollBarHorizontal: [{ type: Input, args: ['doubleScrollBarHorizontal',] }],
    mainDiv: [{ type: ViewChild, args: ['mainDiv', { static: false },] }],
    wrapperDiv: [{ type: ViewChild, args: ['wrapperDiv', { static: false },] }]
};
if (false) {
    /** @type {?} */
    AngularDoubleScrollbarsComponent.prototype.doubleScrollBarHorizontal;
    /** @type {?} */
    AngularDoubleScrollbarsComponent.prototype.mainDiv;
    /** @type {?} */
    AngularDoubleScrollbarsComponent.prototype.wrapperDiv;
    /** @type {?} */
    AngularDoubleScrollbarsComponent.prototype.nativeScrollBarHeight;
    /** @type {?} */
    AngularDoubleScrollbarsComponent.prototype.scrollBarElementHeight;
    /** @type {?} */
    AngularDoubleScrollbarsComponent.prototype.wrapper2scrollWidth;
    /**
     * @type {?}
     * @private
     */
    AngularDoubleScrollbarsComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDoubleScrollbarsModule {
}
AngularDoubleScrollbarsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularDoubleScrollbarsComponent],
                imports: [
                    CommonModule
                ],
                exports: [AngularDoubleScrollbarsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-double-scrollbars.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularDoubleScrollbarsComponent, AngularDoubleScrollbarsModule, AngularDoubleScrollbarsService };
//# sourceMappingURL=angular-double-scrollbars.js.map
