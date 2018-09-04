import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import { DelonFormModule, WidgetRegistry} from '@delon/form';
import {ByCascaderAreaWidget} from './cascader-area/by-cascader-area.widget';
import {ByDateWidget} from './date/by-date.widget';


@NgModule({
    imports: [
        SharedModule,
        DelonFormModule.forRoot()
    ],
    declarations: [
        ByDateWidget,
        ByCascaderAreaWidget,
    ],
    entryComponents: [
        ByDateWidget,
        ByCascaderAreaWidget,
    ],
    exports: [
        ByDateWidget,
        ByCascaderAreaWidget,
    ]
})
export class SfWidgetModule {
    constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(ByDateWidget.KEY, ByDateWidget);
        widgetRegistry.register(ByCascaderAreaWidget.KEY, ByCascaderAreaWidget);
    }
}
