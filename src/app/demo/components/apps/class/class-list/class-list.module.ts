import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ClassListComponent } from "./class-list.component";
import { ClassListRoutingModule } from "./class-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        ClassListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [ClassListComponent]
  })
  export class ClassListModule { }
