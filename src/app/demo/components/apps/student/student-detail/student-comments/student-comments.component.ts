import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/demo/api/student';

@Component({
    selector: 'app-student-comments',
    templateUrl: './student-comments.component.html',
})
export class StudentCommentsComponent {
    @Input() comments: Comment[] = [];

    rowCount = 3;
}
