import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './teacher-information.component.html',
})
export class TeacherInfoComponent {
    // Sample data for the table
    tableData: any[] = [
        

        { name: 'mohamed', birthday: '1993-05-20', email: 'ahmed@example.com',phoneNumber: '12345678', address: 'Al Mourouj 6',class: '4eme Math, 3eme Science'  },

        // Add more data as needed
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
