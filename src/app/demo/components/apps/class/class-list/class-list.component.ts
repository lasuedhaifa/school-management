import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './class-list.component.html',
})
export class ClassListComponent {
    // Sample data for the table
    tableData: any[] = [
        

        { name: '4eme Math', level:'4' , numberofteacher: '5', studentNumber: '27' , teacher: 'mouadh, ahmed' ,subject: 'arabe, anglais'  },

        // Add more data as needed
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
