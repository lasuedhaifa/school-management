import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectAddComponent } from './subject-add.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SubjectAddComponent }
    ])],
    exports: [RouterModule]
})
export class SubjectAddRoutingModule { }
