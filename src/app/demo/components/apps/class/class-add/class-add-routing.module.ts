import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassAddComponent } from './class-add.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ClassAddComponent }
    ])],
    exports: [RouterModule]
})
export class ClassAddRoutingModule { }
