import { OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AngularDoubleScrollbarsComponent implements OnInit {
    private cd;
    constructor(cd: ChangeDetectorRef);
    doubleScrollBarHorizontal: string;
    mainDiv: ElementRef;
    wrapperDiv: ElementRef;
    nativeScrollBarHeight: string;
    scrollBarElementHeight: string;
    wrapper2scrollWidth: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onWrapperScroll($event: any): void;
    onMainScroll($event: any): void;
    private getWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularDoubleScrollbarsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularDoubleScrollbarsComponent, "lib-angular-double-scrollbars", never, { "doubleScrollBarHorizontal": "doubleScrollBarHorizontal"; }, {}, never, ["*"]>;
}
