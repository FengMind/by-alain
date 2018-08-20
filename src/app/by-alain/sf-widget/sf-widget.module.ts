import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {DelonFormModule, WidgetRegistry} from '@delon/form';
import {BySfDateWidget} from "./date/by-sf-date.widget";
// import {BySfTreeSelectWidget} from "./treeSelect/by-sf-treeSelect.widget";


@NgModule({
    imports: [
        SharedModule,
        DelonFormModule.forRoot()
    ],
    declarations: [
        BySfDateWidget,
        //BySfTreeSelectWidget
    ],
    entryComponents: [
        BySfDateWidget,
        //BySfTreeSelectWidget
    ],
    exports: [
        BySfDateWidget,
        //BySfTreeSelectWidget
    ]
})
export class SfWidgetModule {
    constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(BySfDateWidget.KEY, BySfDateWidget);
    }
}
