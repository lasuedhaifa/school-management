import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { File } from 'src/app/demo/api/file';

@Component({
    templateUrl: './teacher-edit.component.html',
    styleUrls: ['./teacher-edit.component.scss']
})
export class TeacherEditComponent {

    @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

    image: any;

    objectURL: string = '';

    tags: string[] = ['Software', 'Web'];

    onUpload(event: any) {
        let file = event.files[0];
        file.objectURL = file.objectURL ? file.objectURL : this.objectURL;

        if (!file.objectURL) {
            return;
        }
        else {
            this.image = file;
            this.objectURL = file.objectURL;
        }
    }

    removeImage() {
        this.image = null;
    }

}

