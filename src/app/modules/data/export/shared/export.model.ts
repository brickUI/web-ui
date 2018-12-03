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

export interface ExportModel {
    ID: string | undefined;
    Filter: string;
    FilterType: string | undefined;
    Name: string | undefined;
    Description: string | undefined;
    EntityName: string | undefined;
    Topic: string | undefined;
    Measurement: string | undefined;
    Database: string | undefined;
    TimePath: string | undefined;
    RancherServiceId: string;
    ServiceName: string;
    Values: ExportValueModel [];
}

export interface ExportValueModel {
    InstanceID: string;
    Name: string;
    Path: string;
    Type: string;
}