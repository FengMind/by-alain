import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SfWidgetModule} from './sf-widget/sf-widget.module';

@NgModule({
    imports: [
        CommonModule,
        SfWidgetModule,
    ],
    declarations: [],
    exports: [SfWidgetModule]
})
export class ByAlainModule {

}
