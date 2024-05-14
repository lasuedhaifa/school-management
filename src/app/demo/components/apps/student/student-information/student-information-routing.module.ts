import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentInfoComponent } from './student-information.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: StudentInfoComponent }
    ])],
    exports: [RouterModule]
})
export class StudentInfoRoutingModule { }

