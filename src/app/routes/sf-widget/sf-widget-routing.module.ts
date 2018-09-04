import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DateComponent} from './date/date.component';
import {CascaderAreaComponent} from './cascader-area/cascader-area.component';

const routes: Routes = [
    {path: 'date', component: DateComponent},
    {path: 'cascader-area', component: CascaderAreaComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SfWidgetRoutingModule {
}
