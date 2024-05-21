import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    options: any;

    overlays: any[] = [];

    dialogVisible: boolean = false;

    markerTitle: string = '';

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean = false;

    name: string = '';

    email: string = '';

    message: string = '';

    content: any[] = [
        { icon: 'pi pi-fw pi-phone', title: 'Phone', info: '+216 ** *** ***' },
        {
            icon: 'pi pi-fw pi-map-marker',
            title: 'Our Head Office',
            info: 'Sfax , 3000, route klm 3',
        },
        { icon: 'pi pi-fw pi-print', title: 'E-mail', info: '*****@**.com' },
    ];

    constructor(private layoutService: LayoutService) {}

    get mapStyle() {
        return {
            'background-image':
                this.layoutService.config().colorScheme === 'light'
                    ? "url('assets/demo/images/contact/map-light.svg')"
                    : "url('assets/demo/images/contact/map-dark.svg')",
        };
    }
}
