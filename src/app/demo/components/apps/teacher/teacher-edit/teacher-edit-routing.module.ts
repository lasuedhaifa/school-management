import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherEditComponent } from './teacher-edit.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TeacherEditComponent }
    ])],
    exports: [RouterModule]
})
export class TeacherEditRoutingModule { }
