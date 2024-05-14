import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./teacher-list/teacher-list.module').then(m => m.TeacherListModule) },
        { path: 'detail', data: { breadcrumb: 'Detail' }, loadChildren: () => import('./teacher-detail/teacher-detail.module').then(m => m.TeacherDetailModule) },
        { path: 'edit', data: { breadcrumb: 'Edit' }, loadChildren: () => import('./teacher-edit/teacher-edit.module').then(m => m.TeacherEditModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./teacher-add/teacher-add.module').then(m => m.TeacherAddModule) },
        { path: 'information', data: { breadcrumb: 'Info' }, loadChildren: () => import('./teacher-information/teacher-information.module').then(m => m.TeacherInfoModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class TeacherAppRoutingModule { }
