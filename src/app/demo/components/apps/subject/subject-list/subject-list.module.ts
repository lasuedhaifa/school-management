import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { SubjectListComponent } from "./subject-list.component";
import { SubjectListRoutingModule } from "./subject-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        SubjectListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [SubjectListComponent]
  })
  export class SubjectListModule { }
