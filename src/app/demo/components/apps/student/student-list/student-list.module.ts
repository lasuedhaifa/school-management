import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { StudentListComponent } from "./student-list.component";
import { StudentListRoutingModule } from "./student-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        StudentListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [StudentListComponent]
  })
  export class StudentListModule { }
