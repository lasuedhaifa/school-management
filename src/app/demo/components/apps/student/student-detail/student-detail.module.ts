import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { StudentCommentsComponent } from "./student-comments/student-comments.component";
import { NewCommentComponent } from "./new-comment/new-comment.component";
import { StudentDetailComponent } from "./student-detail.component";
import { StudentDetailRoutingModule } from "./student-detail-routing.module";
import { RippleModule } from "primeng/ripple";

@NgModule({
    imports: [
        CommonModule,
        StudentDetailRoutingModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        RippleModule
    ],
    declarations: [StudentCommentsComponent, NewCommentComponent, StudentDetailComponent]
})
export class StudentDetailModule { }
