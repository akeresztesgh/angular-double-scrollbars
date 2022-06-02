import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["mainDiv"];
const _c1 = ["wrapperDiv"];
const _c2 = function (a0) { return { height: a0 }; };
const _c3 = function (a0, a1) { return { "overflow-x": a0, height: a1 }; };
const _c4 = function (a0, a1) { return { width: a0, height: a1 }; };
const _c5 = function (a0) { return { "overflow-x": a0 }; };
const _c6 = ["*"];
export class AngularDoubleScrollbarsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kb3VibGUtc2Nyb2xsYmFycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWRvdWJsZS1zY3JvbGxiYXJzL3NyYy9saWIvYW5ndWxhci1kb3VibGUtc2Nyb2xsYmFycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWMsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQWtCbkcsTUFBTSxPQUFPLGdDQUFnQztJQUUzQyxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFJLENBQUM7SUFVOUMsUUFBUTtRQUNOLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sZUFBZSxDQUFDLE1BQU07UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNuRixDQUFDO0lBRU0sWUFBWSxDQUFDLE1BQU07UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNuRixDQUFDO0lBRU8sUUFBUTtRQUNkLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRTdCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzttSUF0RFUsZ0NBQWdDO2tIQUFoQyxnQ0FBZ0M7Ozs7Ozs7OztRQWJ2Qyw4QkFBMEUsZ0JBQUE7UUFHeEQsa0hBQVUsMkJBQXVCLElBQUM7UUFDOUMseUJBQWlGO1FBQ3JGLGlCQUFNLEVBQUE7UUFFUixpQ0FDa0M7UUFBaEMsa0hBQVUsd0JBQW9CLElBQUM7UUFDL0Isa0JBQXlCO1FBQzNCLGlCQUFNOztRQVZ5QiwrRUFBMEM7UUFFbkUsZUFBNEc7UUFBNUcsK0lBQTRHO1FBRXZHLGVBQXFFO1FBQXJFLHlHQUFxRTtRQUczRSxlQUE4RTtRQUE5RSxvSEFBOEU7O3VGQU01RSxnQ0FBZ0M7Y0FoQjVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O2FBV0M7Z0JBQ1gsTUFBTSxFQUFFLEVBQUU7YUFDWDtvRUFJcUMseUJBQXlCO2tCQUE1RCxLQUFLO21CQUFDLDJCQUEyQjtZQUNLLE9BQU87a0JBQTdDLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUNLLFVBQVU7a0JBQW5ELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhci1kb3VibGUtc2Nyb2xsYmFycycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3cteTpoaWRkZW5cIiBbbmdTdHlsZV09XCJ7aGVpZ2h0Om5hdGl2ZVNjcm9sbEJhckhlaWdodH1cIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm92ZXJmbG93LXk6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4XCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnb3ZlcmZsb3cteCc6ZG91YmxlU2Nyb2xsQmFySG9yaXpvbnRhbD09J2Fsd2F5cyc/J3Njcm9sbCc6J2F1dG8nLGhlaWdodDpzY3JvbGxCYXJFbGVtZW50SGVpZ2h0fVwiXG4gICAgICAgICAgICAjd3JhcHBlckRpdiAoc2Nyb2xsKT0nb25XcmFwcGVyU2Nyb2xsKCRldmVudCknPlxuICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7d2lkdGg6d3JhcHBlcjJzY3JvbGxXaWR0aCxoZWlnaHQ6c2Nyb2xsQmFyRWxlbWVudEhlaWdodH1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgW25nU3R5bGVdPVwieydvdmVyZmxvdy14Jzpkb3VibGVTY3JvbGxCYXJIb3Jpem9udGFsPT0nYWx3YXlzJz8nc2Nyb2xsJzonYXV0byd9XCIgI21haW5EaXZcbiAgICAgICAgKHNjcm9sbCk9J29uTWFpblNjcm9sbCgkZXZlbnQpJz5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRG91YmxlU2Nyb2xsYmFyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuICBASW5wdXQoJ2RvdWJsZVNjcm9sbEJhckhvcml6b250YWwnKSBkb3VibGVTY3JvbGxCYXJIb3Jpem9udGFsOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ21haW5EaXYnLCB7c3RhdGljOiBmYWxzZX0pIG1haW5EaXY6RWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlckRpdicsIHtzdGF0aWM6IGZhbHNlfSkgd3JhcHBlckRpdjpFbGVtZW50UmVmO1xuXG4gIG5hdGl2ZVNjcm9sbEJhckhlaWdodDogc3RyaW5nO1xuICBzY3JvbGxCYXJFbGVtZW50SGVpZ2h0OiBzdHJpbmc7XG4gIHdyYXBwZXIyc2Nyb2xsV2lkdGg6IHN0cmluZztcbiAgXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGJhclNpemUgPSB0aGlzLmdldFdpZHRoKCk7XG5cbiAgICB0aGlzLm5hdGl2ZVNjcm9sbEJhckhlaWdodCA9IGJhclNpemUgKyAncHgnO1xuICAgIHRoaXMuc2Nyb2xsQmFyRWxlbWVudEhlaWdodCA9IChiYXJTaXplICsgMSkgKyAncHgnOyAgICAgICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMud3JhcHBlcjJzY3JvbGxXaWR0aCA9IHRoaXMubWFpbkRpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoICsgJ3B4JztcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbldyYXBwZXJTY3JvbGwoJGV2ZW50KXtcbiAgICB0aGlzLm1haW5EaXYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy53cmFwcGVyRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHB1YmxpYyBvbk1haW5TY3JvbGwoJGV2ZW50KXtcbiAgICB0aGlzLndyYXBwZXJEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy5tYWluRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lkdGgoKSB7XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyLnN0eWxlLmhlaWdodCA9ICcxNTBweCc7XG4gICAgb3V0ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG91dGVyLnN0eWxlLnRvcCA9ICcwJztcbiAgICBvdXRlci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIHZhciB3aWR0aDEgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIHZhciB3aWR0aDIgPSBvdXRlci5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgICByZXR1cm4gKHdpZHRoMSAtIHdpZHRoMik7XG4gIH1cbn1cbiJdfQ==