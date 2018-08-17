import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import {BySfWidgetDateComponent} from './date/by-sf-widget-date.component';


@NgModule({
    declarations: [BySfWidgetDateComponent],
    entryComponents: [BySfWidgetDateComponent],
    imports: [
        SharedModule,
        DelonFormModule.forRoot()
    ],
    exports: [
        BySfWidgetDateComponent
    ]
})
export class SfWidgetModule {
    constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(BySfWidgetDateComponent.KEY, BySfWidgetDateComponent);
    }
}
