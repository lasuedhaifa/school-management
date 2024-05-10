import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { EvaluationListComponent } from "./evaluation-list.component";
import { EvaluationListRoutingModule } from "./evaluation-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        EvaluationListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [EvaluationListComponent]
  })
  export class EvaluationListModule { }
