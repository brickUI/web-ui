/*
 *
 *  Copyright 2019 InfAI (CC SES)
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    templateUrl: './device-types-new-device-class-dialog.component.html',
    styleUrls: ['./device-types-new-device-class-dialog.component.css']
})
export class DeviceTypesNewDeviceClassDialogComponent {

    constructor(private dialogRef: MatDialogRef<DeviceTypesNewDeviceClassDialogComponent>) {
    }

    close(): void {
        this.dialogRef.close();
    }

    save(label: string): void {
        this.dialogRef.close(label);
    }

}