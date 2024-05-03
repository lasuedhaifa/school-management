import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentEditComponent } from './student-edit.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: StudentEditComponent }
    ])],
    exports: [RouterModule]
})
export class StudentEditRoutingModule { }
