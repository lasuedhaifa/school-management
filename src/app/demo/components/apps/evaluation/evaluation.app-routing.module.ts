import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./evaluation-list/evaluation-list.module').then(m => m.EvaluationListModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./evaluation-add/evaluation-add.module').then(m => m.EvaluationAddModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class EvaluationAppRoutingModule { }
