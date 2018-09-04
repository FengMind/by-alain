import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateComponent} from './date/date.component';
import {SfWidgetRoutingModule} from './sf-widget-routing.module';
import {SharedModule} from '@shared/shared.module';
import { CascaderAreaComponent } from './cascader-area/cascader-area.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SfWidgetRoutingModule
    ],
    declarations: [DateComponent, CascaderAreaComponent]
})
export class SfWidgetModule {
}
