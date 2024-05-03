import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StudentAppRoutingModule } from "./student.app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        StudentAppRoutingModule
    ]
})
export class StudentAppModule { }
