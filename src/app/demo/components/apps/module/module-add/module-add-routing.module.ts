import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleAddComponent } from './module-add.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ModuleAddComponent }
    ])],
    exports: [RouterModule]
})
export class ModuleAddRoutingModule { }
