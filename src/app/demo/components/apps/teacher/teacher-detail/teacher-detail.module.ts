import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TeacherCommentsComponent } from "./teacher-comments/teacher-comments.component";
import { NewCommentComponent } from "./new-comment/new-comment.component";
import { TeacherDetailComponent } from "./teacher-detail.component";
import { TeacherDetailRoutingModule } from "./teacher-detail-routing.module";
import { RippleModule } from "primeng/ripple";

@NgModule({
    imports: [
        CommonModule,
        TeacherDetailRoutingModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        RippleModule
    ],
    declarations: [TeacherCommentsComponent, NewCommentComponent, TeacherDetailComponent]
})
export class TeacherDetailModule { }
