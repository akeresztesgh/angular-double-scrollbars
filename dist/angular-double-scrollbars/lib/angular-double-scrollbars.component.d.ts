import { OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
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
}
