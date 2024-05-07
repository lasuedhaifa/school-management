import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./subject-list/subject-list.module').then(m => m.SubjectListModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./subject-add/subject-add.module').then(m => m.SubjectAddModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class SubjectAppRoutingModule { }
