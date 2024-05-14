import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherInfoComponent } from './teacher-information.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TeacherInfoComponent }
    ])],
    exports: [RouterModule]
})
export class TeacherInfoRoutingModule { }

