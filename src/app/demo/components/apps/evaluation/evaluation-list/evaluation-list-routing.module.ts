import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EvaluationListComponent } from './evaluation-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EvaluationListComponent }
    ])],
    exports: [RouterModule]
})
export class EvaluationListRoutingModule { }

