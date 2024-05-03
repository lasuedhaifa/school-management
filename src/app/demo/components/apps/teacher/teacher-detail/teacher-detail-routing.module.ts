import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherDetailComponent } from './teacher-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TeacherDetailComponent }
    ])],
    exports: [RouterModule]
})
export class TeacherDetailRoutingModule { }
