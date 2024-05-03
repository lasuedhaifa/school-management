import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ChipModule } from "primeng/chip";
import { EditorModule } from "primeng/editor";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RippleModule } from "primeng/ripple";
import { TeacherEditRoutingModule } from "./teacher-edit-routing.module";
import { TeacherEditComponent } from "./teacher-edit.component";

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        FileUploadModule,
        RippleModule,
        ChipModule,
        EditorModule,
        TeacherEditRoutingModule
    ],
    declarations: [TeacherEditComponent]
})
export class TeacherEditModule { }
