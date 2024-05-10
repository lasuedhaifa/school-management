import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EvaluationAddComponent } from './evaluation-add.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EvaluationAddComponent }
    ])],
    exports: [RouterModule]
})
export class EvaluationAddRoutingModule { }
