import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './module-list.component.html',
})
export class ModuleListComponent {
    // Sample data for the table
    tableData: any[] = [
        

        { name: 'Science Module', subject: 'Mathematics, physics, Computer Science'  },
        { name: 'Language Module', subject: 'Arabic, English, French'  },


        // Add more data as needed
    ];

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' },
    ];

    sortField: string = '';
}
