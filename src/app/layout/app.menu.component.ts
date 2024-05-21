import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Favorites',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Class',
                        icon: 'pi pi-user ',
                        items: [
                            {
                                label: 'View Class',
                                routerLink: ['/apps/class/list'],
                            },
                            {
                                label: 'Add Class',
                                routerLink: ['/apps/class/add'],
                            },
                            
                        ],
                    },
                    {
                        label: 'Students',
                        icon: 'pi pi-user ',
                        items: [
                            {
                                label: 'View Student',
                                routerLink: ['/apps/student/list'],
                            },
                            {
                                label: 'Info Student',
                                routerLink: ['/apps/student/information'],
                            },
                            {
                                label: 'Add Student',
                                routerLink: ['/apps/student/add'],
                            },
                            {
                                label: 'Edit Student',
                                routerLink: ['/apps/student/edit'],
                            },
                        ],
                    },
                    {
                        label: 'Teachers',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'View Teachers',
                                routerLink: ['/apps/teacher/list'],
                            },
                            {
                                label: 'Info Teacher',
                                routerLink: ['/apps/teacher/information'],
                            },
                            {
                                label: 'Add Teacher',
                                routerLink: ['/apps/teacher/add'],
                            },
                            {
                                label: 'Edit Teacher',
                                routerLink: ['/apps/teacher/edit'],
                            },
                        ],
                    },
                    {
                        label: 'Tutors',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'View Tutor',
                                routerLink: ['/apps/tutor/list'],
                            },
                        
                            {
                                label: 'Add Tutor',
                                routerLink: ['/apps/tutor/add'],
                            },
                           
                        ],
                    },
                    {
                        label: 'Subject',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'View Subject',
                                routerLink: ['/apps/subject/list'],
                            },
                            {
                                label: 'Add Subject',
                                routerLink: ['/apps/subject/add'],
                            },
                        ],
                    },
                    {
                        label: 'Evaluation',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'View Evaluation',
                                routerLink: ['/apps/evaluation/list'],
                            },
                            {
                                label: 'Add Evaluation',
                                routerLink: ['/apps/evaluation/add'],
                            },
                        ],
                    },
                    {
                        label: 'Module',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'View Module',
                                routerLink: ['/apps/module/list'],
                            },
                            {
                                label: 'Add Module',
                                routerLink: ['/apps/module/add'],
                            },
                        ],
                    },
                    {
                        label: 'Report Card',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'Download',
                                routerLink: ['/apps/marks/list'],
                            },
                        ],
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar'],
                    },
                    
                ],
            },
            
        
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                            },
                        ],
                    },
            
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help'],
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty'],
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/pages/contact']
                    }
                ],
            },
            
          
        ];
    }
}
