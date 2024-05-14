import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TeacherInfoComponent } from "./teacher-information.component";
import { TeacherInfoRoutingModule } from "./teacher-information-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        TeacherInfoRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [TeacherInfoComponent]
  })
  export class TeacherInfoModule { }
