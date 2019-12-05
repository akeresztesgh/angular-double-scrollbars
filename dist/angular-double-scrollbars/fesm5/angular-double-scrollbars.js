import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectorRef, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularDoubleScrollbarsService = /** @class */ (function () {
    function AngularDoubleScrollbarsService() {
    }
    AngularDoubleScrollbarsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularDoubleScrollbarsService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularDoubleScrollbarsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularDoubleScrollbarsService_Factory() { return new AngularDoubleScrollbarsService(); }, token: AngularDoubleScrollbarsService, providedIn: "root" });
    return AngularDoubleScrollbarsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularDoubleScrollbarsComponent = /** @class */ (function () {
    function AngularDoubleScrollbarsComponent(cd) {
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    AngularDoubleScrollbarsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var barSize = this.getWidth();
        this.nativeScrollBarHeight = barSize + 'px';
        this.scrollBarElementHeight = (barSize + 1) + 'px';
    };
    /**
     * @return {?}
     */
    AngularDoubleScrollbarsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.wrapper2scrollWidth = this.mainDiv.nativeElement.scrollWidth + 'px';
        this.cd.detectChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AngularDoubleScrollbarsComponent.prototype.onWrapperScroll = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.mainDiv.nativeElement.scrollLeft = this.wrapperDiv.nativeElement.scrollLeft;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AngularDoubleScrollbarsComponent.prototype.onMainScroll = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.wrapperDiv.nativeElement.scrollLeft = this.mainDiv.nativeElement.scrollLeft;
    };
    /**
     * @private
     * @return {?}
     */
    AngularDoubleScrollbarsComponent.prototype.getWidth = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    AngularDoubleScrollbarsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-angular-double-scrollbars',
                    template: "\n      <div style=\"overflow-y:hidden\" [ngStyle]=\"{height:nativeScrollBarHeight}\">\n        <div style=\"overflow-y:hidden;position:relative;top:-1px\"\n            [ngStyle]=\"{'overflow-x':doubleScrollBarHorizontal=='always'?'scroll':'auto',height:scrollBarElementHeight}\"\n            #wrapperDiv (scroll)='onWrapperScroll($event)'>\n            <div [ngStyle]=\"{width:wrapper2scrollWidth,height:scrollBarElementHeight}\"></div>\n        </div>\n      </div>\n      <div [ngStyle]=\"{'overflow-x':doubleScrollBarHorizontal=='always'?'scroll':'auto'}\" #mainDiv\n        (scroll)='onMainScroll($event)'>\n        <ng-content></ng-content>\n      </div>"
                }] }
    ];
    /** @nocollapse */
    AngularDoubleScrollbarsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    AngularDoubleScrollbarsComponent.propDecorators = {
        doubleScrollBarHorizontal: [{ type: Input, args: ['doubleScrollBarHorizontal',] }],
        mainDiv: [{ type: ViewChild, args: ['mainDiv', { static: false },] }],
        wrapperDiv: [{ type: ViewChild, args: ['wrapperDiv', { static: false },] }]
    };
    return AngularDoubleScrollbarsComponent;
}());
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
var AngularDoubleScrollbarsModule = /** @class */ (function () {
    function AngularDoubleScrollbarsModule() {
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
    return AngularDoubleScrollbarsModule;
}());

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
