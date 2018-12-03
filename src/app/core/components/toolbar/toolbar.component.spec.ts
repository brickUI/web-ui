/*
 * Copyright 2018 InfAI (CC SES)
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import {MatIconModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatDividerModule} from '@angular/material';
import {SidenavService} from '../sidenav/shared/sidenav.service';
import {UIRouter} from '@uirouter/angular';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let sidenavServiceMock: Partial<SidenavService>;
  let routerStub;

  beforeEach(async(() => {

           sidenavServiceMock = {
      };

           routerStub = {
             navigate: jasmine.createSpy('navigate')
           }



    TestBed.configureTestingModule({
      imports: [MatIconModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatDividerModule],
      declarations: [ ToolbarComponent ],
      providers: [{provide: SidenavService, useValue: sidenavServiceMock}, {provide: UIRouter, useValue: routerStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});