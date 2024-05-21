import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TutorListComponent } from "./tutor-list.component";
import { TutorListRoutingModule} from "./tutor-list-routing.module";
import { TableModule } from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AvatarModule,
        TutorListRoutingModule,
        DataViewModule,
        TableModule,
        DropdownModule
    ],
    declarations: [TutorListComponent]
  })
  export class TutorListModule { }
