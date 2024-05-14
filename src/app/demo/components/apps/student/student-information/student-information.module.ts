import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { StudentInfoComponent } from "./student-information.component";
import { StudentInfoRoutingModule } from "./student-information-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        StudentInfoRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [StudentInfoComponent]
  })
  export class StudentInfoModule { }
