import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./module-list/module-list.module').then(m => m.ModuleListModule) },
        { path: 'add', data: { breadcrumb: 'Add' }, loadChildren: () => import('./module-add/module-add.module').then(m => m.ModuleAddModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ModuleAppRoutingModule { }
