import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './teacher-list.component.html',
})
export class TeacherListComponent {
    // Sample data for the table
    tableData: any[] = [
        { name: 'mouadh mouadh', birthday: '2000-05-20', email: 'mouadh@example.com', subject: 'Mathematics' },
        { name: 'yassine yassine', birthday: '1999-12-10', email: 'yassin@example.com', subject: 'Physics' },
        // Add more data as needed
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
