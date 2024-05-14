import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleListComponent } from './module-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ModuleListComponent }
    ])],
    exports: [RouterModule]
})
export class ModuleListRoutingModule { }

