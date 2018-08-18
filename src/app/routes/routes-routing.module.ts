import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from '@env/environment';
// layout
import {LayoutDefaultComponent} from '../layout/default/default.component';

// single pages
import {CallbackComponent} from './callback/callback.component';
import {UserLockComponent} from './passport/lock/lock.component';
import {Exception403Component} from './exception/403.component';
import {Exception404Component} from './exception/404.component';
import {Exception500Component} from './exception/500.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            {path: '', redirectTo: 'sf-widget/date', pathMatch: 'full'},
            {path: 'sf-widget', loadChildren: './sf-widget/sf-widget.module#SfWidgetModule'},
        ],
    },
    // 单页不包裹Layout
    {path: 'callback/:type', component: CallbackComponent},
    {
        path: 'lock',
        component: UserLockComponent,
        data: {title: '锁屏', titleI18n: 'lock'},
    },
    {path: '403', component: Exception403Component},
    {path: '404', component: Exception404Component},
    {path: '500', component: Exception500Component},
    {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: environment.useHash})],
    exports: [RouterModule],
})
export class RouteRoutingModule {
}
