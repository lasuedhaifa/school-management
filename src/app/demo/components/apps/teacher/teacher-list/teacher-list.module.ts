import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TeacherListComponent } from "./teacher-list.component";
import { TeacherListRoutingModule } from "./teacher-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        TeacherListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [TeacherListComponent]
  })
  export class TeacherListModule { }
