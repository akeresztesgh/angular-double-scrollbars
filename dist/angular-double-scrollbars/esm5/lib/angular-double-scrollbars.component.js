/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
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
export { AngularDoubleScrollbarsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kb3VibGUtc2Nyb2xsYmFycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWRvdWJsZS1zY3JvbGxiYXJzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZG91YmxlLXNjcm9sbGJhcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRztJQWtCRSwwQ0FBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFBSSxDQUFDOzs7O0lBVTlDLG1EQUFROzs7SUFBUjs7WUFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUU3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCwwREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU0sMERBQWU7Ozs7SUFBdEIsVUFBdUIsTUFBTTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRU0sdURBQVk7Ozs7SUFBbkIsVUFBb0IsTUFBTTtRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRU8sbURBQVE7Ozs7SUFBaEI7O1lBQ00sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOztZQUNyQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFekMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUU3QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDN0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXO1FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7WUFDNUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsc3BCQVdDO2lCQUVaOzs7O2dCQWpCeUQsaUJBQWlCOzs7NENBcUJ4RSxLQUFLLFNBQUMsMkJBQTJCOzBCQUNqQyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs2QkFDcEMsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBa0QxQyx1Q0FBQztDQUFBLEFBdkVELElBdUVDO1NBdkRZLGdDQUFnQzs7O0lBRzNDLHFFQUFzRTs7SUFDdEUsbURBQTBEOztJQUMxRCxzREFBZ0U7O0lBRWhFLGlFQUE4Qjs7SUFDOUIsa0VBQStCOztJQUMvQiwrREFBNEI7Ozs7O0lBUGhCLDhDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhci1kb3VibGUtc2Nyb2xsYmFycycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3cteTpoaWRkZW5cIiBbbmdTdHlsZV09XCJ7aGVpZ2h0Om5hdGl2ZVNjcm9sbEJhckhlaWdodH1cIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm92ZXJmbG93LXk6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4XCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnb3ZlcmZsb3cteCc6ZG91YmxlU2Nyb2xsQmFySG9yaXpvbnRhbD09J2Fsd2F5cyc/J3Njcm9sbCc6J2F1dG8nLGhlaWdodDpzY3JvbGxCYXJFbGVtZW50SGVpZ2h0fVwiXG4gICAgICAgICAgICAjd3JhcHBlckRpdiAoc2Nyb2xsKT0nb25XcmFwcGVyU2Nyb2xsKCRldmVudCknPlxuICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7d2lkdGg6d3JhcHBlcjJzY3JvbGxXaWR0aCxoZWlnaHQ6c2Nyb2xsQmFyRWxlbWVudEhlaWdodH1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgW25nU3R5bGVdPVwieydvdmVyZmxvdy14Jzpkb3VibGVTY3JvbGxCYXJIb3Jpem9udGFsPT0nYWx3YXlzJz8nc2Nyb2xsJzonYXV0byd9XCIgI21haW5EaXZcbiAgICAgICAgKHNjcm9sbCk9J29uTWFpblNjcm9sbCgkZXZlbnQpJz5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRG91YmxlU2Nyb2xsYmFyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuICBASW5wdXQoJ2RvdWJsZVNjcm9sbEJhckhvcml6b250YWwnKSBkb3VibGVTY3JvbGxCYXJIb3Jpem9udGFsOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ21haW5EaXYnLCB7c3RhdGljOiBmYWxzZX0pIG1haW5EaXY6RWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlckRpdicsIHtzdGF0aWM6IGZhbHNlfSkgd3JhcHBlckRpdjpFbGVtZW50UmVmO1xuXG4gIG5hdGl2ZVNjcm9sbEJhckhlaWdodDogc3RyaW5nO1xuICBzY3JvbGxCYXJFbGVtZW50SGVpZ2h0OiBzdHJpbmc7XG4gIHdyYXBwZXIyc2Nyb2xsV2lkdGg6IHN0cmluZztcbiAgXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGJhclNpemUgPSB0aGlzLmdldFdpZHRoKCk7XG5cbiAgICB0aGlzLm5hdGl2ZVNjcm9sbEJhckhlaWdodCA9IGJhclNpemUgKyAncHgnO1xuICAgIHRoaXMuc2Nyb2xsQmFyRWxlbWVudEhlaWdodCA9IChiYXJTaXplICsgMSkgKyAncHgnOyAgICAgICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMud3JhcHBlcjJzY3JvbGxXaWR0aCA9IHRoaXMubWFpbkRpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoICsgJ3B4JztcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbldyYXBwZXJTY3JvbGwoJGV2ZW50KXtcbiAgICB0aGlzLm1haW5EaXYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy53cmFwcGVyRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHB1YmxpYyBvbk1haW5TY3JvbGwoJGV2ZW50KXtcbiAgICB0aGlzLndyYXBwZXJEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy5tYWluRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lkdGgoKSB7XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyLnN0eWxlLmhlaWdodCA9ICcxNTBweCc7XG4gICAgb3V0ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG91dGVyLnN0eWxlLnRvcCA9ICcwJztcbiAgICBvdXRlci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIHZhciB3aWR0aDEgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIHZhciB3aWR0aDIgPSBvdXRlci5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgICByZXR1cm4gKHdpZHRoMSAtIHdpZHRoMik7XG4gIH1cbn1cbiJdfQ==