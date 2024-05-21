import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './tutor-list.component.html',
})
export class TutorListComponent {
    // Sample data for the table
    tableData: any[] = [
        

        { name: 'mohamed ahmed', birthday: '2005-05-20', email: 'ahmed@example.com', address: 'Al Mourouj 6',class: '4eme Math'  },

        // Add more data as needed
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
