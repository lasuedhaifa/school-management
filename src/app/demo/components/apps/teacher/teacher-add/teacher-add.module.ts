import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ChipModule } from "primeng/chip";
import { EditorModule } from "primeng/editor";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RippleModule } from "primeng/ripple";
import { TeacherAddRoutingModule } from "./teacher-add-routing.module";
import { TeacherAddComponent } from "./teacher-add.component";

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
        TeacherAddRoutingModule
    ],
    declarations: [TeacherAddComponent]
})
export class TeacherAddModule { }
