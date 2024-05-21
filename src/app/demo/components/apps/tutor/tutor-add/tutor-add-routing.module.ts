import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TutorAddComponent } from './tutor-add.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TutorAddComponent }
    ])],
    exports: [RouterModule]
})
export class TutorAddRoutingModule{ }
