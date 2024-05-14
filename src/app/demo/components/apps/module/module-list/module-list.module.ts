import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ModuleListComponent } from "./module-list.component";
import { ModuleListRoutingModule } from "./module-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        ModuleListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [ModuleListComponent]
  })
  export class ModuleListModule { }
