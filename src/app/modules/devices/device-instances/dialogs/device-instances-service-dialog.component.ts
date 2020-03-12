/*
 * Copyright 2020 InfAI (CC SES)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeviceTypeServiceModel} from '../../device-types-overview/shared/device-type.model';

@Component({
    templateUrl: './device-instances-service-dialog.component.html',
    styleUrls: ['./device-instances-service-dialog.component.css'],
})
export class DeviceInstancesServiceDialogComponent implements OnInit {

    services: DeviceTypeServiceModel[] = [];

    constructor(private dialogRef: MatDialogRef<DeviceInstancesServiceDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data: { services: DeviceTypeServiceModel[] }) {
        this.services = data.services;
    }

    ngOnInit() {
    }

    close(): void {
        this.dialogRef.close();
    }
}
