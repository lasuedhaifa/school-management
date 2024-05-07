import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './subject-list.component.html',
})
export class SubjectListComponent {
    // Sample data for the table
    tableData: any[] = [
        

        { name: 'Mathematics', teacher: 'mouadh mouadh'  },

        // Add more data as needed
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
