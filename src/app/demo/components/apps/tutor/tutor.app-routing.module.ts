import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./tutor-list/tutor-list.module').then(m => m.TutorListModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./tutor-add/tutor-add.module').then(m => m.TutorAddModule) },


    ])],
    exports: [RouterModule]
})
export class TutorAppRoutingModule { }

