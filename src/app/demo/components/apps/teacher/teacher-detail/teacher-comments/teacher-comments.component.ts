import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/demo/api/teacher';

@Component({
    selector: 'app-teacher-comments',
    templateUrl: './teacher-comments.component.html',
})
export class TeacherCommentsComponent {
    @Input() comments: Comment[] = [];

    rowCount = 3;
}
