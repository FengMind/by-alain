import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from '@env/environment';
// layout
import {LayoutDefaultComponent} from '../layout/default/default.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            {path: '', redirectTo: 'sf-widget/date', pathMatch: 'full'},
            {path: 'sf-widget', loadChildren: './sf-widget/sf-widget.module#SfWidgetModule'},
        ],
    },
    {path: '**', redirectTo: 'sf-widget'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: environment.useHash})],
    exports: [RouterModule],
})
export class RouteRoutingModule {
}
