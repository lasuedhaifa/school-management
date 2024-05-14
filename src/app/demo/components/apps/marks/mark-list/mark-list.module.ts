import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { MarkListComponent } from "./mark-list.component";
import { MarkListRoutingModule } from "./mark-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        MarkListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [MarkListComponent]
  })
  export class MarkListModule { }
