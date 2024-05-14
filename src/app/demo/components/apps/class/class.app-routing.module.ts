import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./class-list/class-list.module').then(m => m.ClassListModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./class-add/class-add.module').then(m => m.ClassAddModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ClassAppRoutingModule { }
