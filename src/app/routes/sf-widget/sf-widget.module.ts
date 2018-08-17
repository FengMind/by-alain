import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateComponent} from './date/date.component';
import {SfWidgetRoutingModule} from './sf-widget-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SfWidgetRoutingModule
    ],
    declarations: [DateComponent]
})
export class SfWidgetModule {
}
