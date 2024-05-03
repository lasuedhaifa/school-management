import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: StudentDetailComponent }
    ])],
    exports: [RouterModule]
})
export class StudentDetailRoutingModule { }
