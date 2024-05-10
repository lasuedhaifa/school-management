import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './evaluation-list.component.html',
})
export class EvaluationListComponent {
    // Sample data for the table
    tableData: any[] = [
        { name: 'Mathematics', midTerm: '17', finalTerm: '16.75', passMark: '16.83', observation: 'Very Good'},
        { name: 'Physics', midTerm: '15.5', finalTerm:'14.5', passMark: '14.83', observation: 'Good'  },
        // Add more data as needed
    ];

    // Sample data for the dropdown menu
    students: any[] = [
        { id: 1, name: 'Mouadh' },
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
