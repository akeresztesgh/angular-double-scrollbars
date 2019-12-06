# AngularDoubleScrollbars

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

website is [here](https://github.com/akeresztesgh/angular-double-scrollbars)

## Installation
npm i angular-double-scrollbars

## Usage

1. Add to module (app.module.ts) under declarations: 

    import { AngularDoubleScrollbarsComponent } from 'angular-double-scrollbars';

    declarations: [
    ...
    AngularDoubleScrollbarsComponent
  ] ...

1. Use in code: 
```
 <lib-angular-double-scrollbars doubleScrollBarHorizontal='always'>
    <div (whatever)></div>
 </lib-angular-double-scrollbars>