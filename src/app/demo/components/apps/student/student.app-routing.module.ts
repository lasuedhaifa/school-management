import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./student-list/student-list.module').then(m => m.StudentListModule) },
        { path: 'detail', data: { breadcrumb: 'Detail' }, loadChildren: () => import('./student-detail/student-detail.module').then(m => m.StudentDetailModule) },
        { path: 'edit', data: { breadcrumb: 'Edit' }, loadChildren: () => import('./student-edit/student-edit.module').then(m => m.StudentEditModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./student-add/student-add.module').then(m => m.StudentAddModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class StudentAppRoutingModule { }
