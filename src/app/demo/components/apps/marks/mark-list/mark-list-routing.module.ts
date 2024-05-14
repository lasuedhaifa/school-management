import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkListComponent } from './mark-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MarkListComponent }
    ])],
    exports: [RouterModule]
})
export class MarkListRoutingModule { }

