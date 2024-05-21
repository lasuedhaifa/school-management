import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TutorListComponent } from './tutor-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TutorListComponent }
    ])],
    exports: [RouterModule]
})
export class TutorListRoutingModule { }

