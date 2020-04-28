import { Component, Input} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-copy-current-url-button',
    templateUrl: './copy-current-url-button.component.html',
    styleUrls: ['./copy-current-url-button.component.scss']
})
export class CopyCurrentUrlButtonComponent {
    @Input() text: string;
    durationInSeconds = 3;

    constructor(
        private location: Location,
        private clipboard: Clipboard,
        private snackBar: MatSnackBar) {
    }

    copyCurrentUrl(): void {
        this.clipboard.copy(`${environment.baseUrl}${this.location.path()}`);
        this.snackBar.open('Copied URL to clipboard.', 'Dismiss', {
            duration: this.durationInSeconds * 1000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }
}
