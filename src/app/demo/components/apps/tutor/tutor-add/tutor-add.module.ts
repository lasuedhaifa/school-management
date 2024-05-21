import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ChipModule } from "primeng/chip";
import { EditorModule } from "primeng/editor";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RippleModule } from "primeng/ripple";
import { TutorAddRoutingModule } from "./tutor-add-routing.module";
import { TutorAddComponent } from "./tutor-add.component";
import { ReactiveFormsModule } from "@angular/forms";

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
        TutorAddRoutingModule,
        ReactiveFormsModule 
        
    ],
    declarations: [TutorAddComponent]
})
export class TutorAddModule{ }