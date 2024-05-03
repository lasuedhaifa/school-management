import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherAddComponent } from './teacher-add.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TeacherAddComponent }
    ])],
    exports: [RouterModule]
})
export class TeacherAddRoutingModule { }
