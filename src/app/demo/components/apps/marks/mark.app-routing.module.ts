import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./mark-list/mark-list.module').then(m => m.MarkListModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class MarkAppRoutingModule { }
