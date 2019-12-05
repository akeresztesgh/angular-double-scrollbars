/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-double-scrollbars.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
export class AngularDoubleScrollbarsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kb3VibGUtc2Nyb2xsYmFycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWRvdWJsZS1zY3JvbGxiYXJzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZG91YmxlLXNjcm9sbGJhcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCbkcsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUUzQyxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFJLENBQUM7Ozs7SUFVOUMsUUFBUTs7WUFDRixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUU3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxNQUFNO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsTUFBTTtRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRU8sUUFBUTs7WUFDVixLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1lBQ3JDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUV6QyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRTdCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUM3QixNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVc7UUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztZQUM1QixNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVc7UUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7YUFXQzthQUVaOzs7O1lBakJ5RCxpQkFBaUI7Ozt3Q0FxQnhFLEtBQUssU0FBQywyQkFBMkI7c0JBQ2pDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO3lCQUNwQyxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQUZ4QyxxRUFBc0U7O0lBQ3RFLG1EQUEwRDs7SUFDMUQsc0RBQWdFOztJQUVoRSxpRUFBOEI7O0lBQzlCLGtFQUErQjs7SUFDL0IsK0RBQTRCOzs7OztJQVBoQiw4Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFuZ3VsYXItZG91YmxlLXNjcm9sbGJhcnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBzdHlsZT1cIm92ZXJmbG93LXk6aGlkZGVuXCIgW25nU3R5bGVdPVwie2hlaWdodDpuYXRpdmVTY3JvbGxCYXJIZWlnaHR9XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJvdmVyZmxvdy15OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTFweFwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7J292ZXJmbG93LXgnOmRvdWJsZVNjcm9sbEJhckhvcml6b250YWw9PSdhbHdheXMnPydzY3JvbGwnOidhdXRvJyxoZWlnaHQ6c2Nyb2xsQmFyRWxlbWVudEhlaWdodH1cIlxuICAgICAgICAgICAgI3dyYXBwZXJEaXYgKHNjcm9sbCk9J29uV3JhcHBlclNjcm9sbCgkZXZlbnQpJz5cbiAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwie3dpZHRoOndyYXBwZXIyc2Nyb2xsV2lkdGgsaGVpZ2h0OnNjcm9sbEJhckVsZW1lbnRIZWlnaHR9XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IFtuZ1N0eWxlXT1cInsnb3ZlcmZsb3cteCc6ZG91YmxlU2Nyb2xsQmFySG9yaXpvbnRhbD09J2Fsd2F5cyc/J3Njcm9sbCc6J2F1dG8nfVwiICNtYWluRGl2XG4gICAgICAgIChzY3JvbGwpPSdvbk1haW5TY3JvbGwoJGV2ZW50KSc+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckRvdWJsZVNjcm9sbGJhcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbiAgQElucHV0KCdkb3VibGVTY3JvbGxCYXJIb3Jpem9udGFsJykgZG91YmxlU2Nyb2xsQmFySG9yaXpvbnRhbDogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdtYWluRGl2Jywge3N0YXRpYzogZmFsc2V9KSBtYWluRGl2OkVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXJEaXYnLCB7c3RhdGljOiBmYWxzZX0pIHdyYXBwZXJEaXY6RWxlbWVudFJlZjtcblxuICBuYXRpdmVTY3JvbGxCYXJIZWlnaHQ6IHN0cmluZztcbiAgc2Nyb2xsQmFyRWxlbWVudEhlaWdodDogc3RyaW5nO1xuICB3cmFwcGVyMnNjcm9sbFdpZHRoOiBzdHJpbmc7XG4gIFxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBiYXJTaXplID0gdGhpcy5nZXRXaWR0aCgpO1xuXG4gICAgdGhpcy5uYXRpdmVTY3JvbGxCYXJIZWlnaHQgPSBiYXJTaXplICsgJ3B4JztcbiAgICB0aGlzLnNjcm9sbEJhckVsZW1lbnRIZWlnaHQgPSAoYmFyU2l6ZSArIDEpICsgJ3B4JzsgICAgICAgXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLndyYXBwZXIyc2Nyb2xsV2lkdGggPSB0aGlzLm1haW5EaXYubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCArICdweCc7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgb25XcmFwcGVyU2Nyb2xsKCRldmVudCl7XG4gICAgdGhpcy5tYWluRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRoaXMud3JhcHBlckRpdi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gIH1cblxuICBwdWJsaWMgb25NYWluU2Nyb2xsKCRldmVudCl7XG4gICAgdGhpcy53cmFwcGVyRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRoaXMubWFpbkRpdi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gIH1cblxuICBwcml2YXRlIGdldFdpZHRoKCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzIwMHB4JztcblxuICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICBvdXRlci5zdHlsZS5oZWlnaHQgPSAnMTUwcHgnO1xuICAgIG91dGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBvdXRlci5zdHlsZS50b3AgPSAnMCc7XG4gICAgb3V0ZXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICB2YXIgd2lkdGgxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB2YXIgd2lkdGgyID0gb3V0ZXIuY2xpZW50V2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG4gICAgcmV0dXJuICh3aWR0aDEgLSB3aWR0aDIpO1xuICB9XG59XG4iXX0=