import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SubjectListComponent }
    ])],
    exports: [RouterModule]
})
export class SubjectListRoutingModule { }

