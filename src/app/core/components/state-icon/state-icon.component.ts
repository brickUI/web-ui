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

import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
    selector: 'senergy-state-icon',
    templateUrl: './state-icon.component.html',
    styleUrls: ['./state-icon.component.css']
})
export class StateIconComponent  {

    @Input() state = false;

    constructor(private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer) {
        this.registerIcons();
    }

    private registerIcons(): void {
        this.iconRegistry.addSvgIcon('online', this.sanitizer.bypassSecurityTrustResourceUrl('src/img/connect.svg'));
        this.iconRegistry.addSvgIcon('offline', this.sanitizer.bypassSecurityTrustResourceUrl('src/img/disconnect.svg'));
    }

}
