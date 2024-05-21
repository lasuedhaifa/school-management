import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Subject {
    name: string;
    testGrade: number;
    examGrade: number;
    average: number;
    teacher: string;
}

interface Module {
    name: string;
    subjects: Subject[];
    average: number;
    observation: string;
}

interface Student {
    name: string;
    birthday: string;
    email: string;
    phoneNumber: string;
    parentName: string;
    parentJob: string;
    address: string;
    class: string;
    modules: Module[];
    overallAverage: number;
    level: string;
    overallObservation: string;
}

@Component({
    selector: 'app-mark-list',
    templateUrl: './mark-list.component.html',
    styleUrls: ['./mark-list.component.scss']
})
export class MarkListComponent {
    // Sample data for the table
    student: Student = {
        name: 'John Doe',
        birthday: '2008-05-15',
        email: 'john.dom',
        phoneNumber: '123-456-7890',
        parentName: 'Jane Doe',
        parentJob: 'Engineer',
        address: '123 Main St, Anytown',
        class: '5th Grade',
        modules: [
            {
                name: 'Langue',
                subjects: [
                    { name: 'Arabe', testGrade: 15, examGrade: 14, average: 14.5, teacher: 'Mr. Ahmed' },
                    { name: 'Orale', testGrade: 16, examGrade: 15, average: 15.5, teacher: 'Mrs. Fatima' },
                    { name: 'Expression Écrite', testGrade: 13, examGrade: 14, average: 13.5, teacher: 'Mr. Youssef' },
                ],
                average: 14.5,
                observation: 'Good performance in language studies.',
            },
            {
                name: 'Scientifique',
                subjects: [
                    { name: 'Physique', testGrade: 14, examGrade: 13, average: 13.5, teacher: 'Mr. Ali' },
                    { name: 'Mathématique', testGrade: 17, examGrade: 18, average: 17.5, teacher: 'Mrs. Salma' },
                    { name: 'Science', testGrade: 15, examGrade: 14, average: 14.5, teacher: 'Mr. Karim' },
                ],
                average: 15.2,
                observation: 'Excellent understanding of scientific subjects.',
            },
            {
                name: 'Français',
                subjects: [
                    { name: 'Français', testGrade: 16, examGrade: 15, average: 15.5, teacher: 'Mrs. Sophie' },
                    { name: 'Grammaire', testGrade: 14, examGrade: 13, average: 13.5, teacher: 'Mr. Jean' },
                    { name: 'Lecture', testGrade: 17, examGrade: 16, average: 16.5, teacher: 'Mrs. Claire' },
                ],
                average: 15.2,
                observation: 'Very good command of the French language.',
            },
            {
                name: 'Sport',
                subjects: [
                    { name: 'Physical Education', testGrade: 18, examGrade: 17, average: 17.5, teacher: 'Mr. Robert' },
                    { name: 'Health Education', testGrade: 15, examGrade: 14, average: 14.5, teacher: 'Mrs. Laura' },
                    { name: 'Sportsmanship', testGrade: 16, examGrade: 15, average: 15.5, teacher: 'Mr. David' },
                ],
                average: 15.8,
                observation: 'Good performance in physical activities.',
            }
        ],
        overallAverage: 15.2,
        level: 'Excellent',
        overallObservation: 'John has shown excellent performance across all subjects. Keep up the good work!'
    };

    // Sort options for sorting the table
    sortOptions: SelectItem[] = [
        { label: 'Module Average', value: 'average' },
        { label: 'Overall Average', value: 'overallAverage' },
    ];

    // Field to store the currently selected sorting option
    sortField: string = '';
}
