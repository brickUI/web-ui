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

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChartsModel} from '../../shared/charts.model';
import {ElementSizeService} from '../../../../core/services/element-size.service';
import {catchError, map} from 'rxjs/internal/operators';
import {DeploymentsService} from '../../../../modules/processes/deployments/shared/deployments.service';
import {environment} from '../../../../../environments/environment';
import {ErrorHandlerService} from '../../../../core/services/error-handler.service';
import {ChartsExportModel} from './charts-export.model';
import {ChartDataTableModel} from '../../../../core/components/chart/chart-data-table.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DashboardService} from '../../../../modules/dashboard/shared/dashboard.service';
import {ChartsExportEditDialogComponent} from '../dialog/charts-export-edit-dialog.component';
import {WidgetModel} from '../../../../modules/dashboard/shared/dashboard-widget.model';

@Injectable({
    providedIn: 'root'
})
export class ChartsExportService {

    constructor(private http: HttpClient,
                private elementSizeService: ElementSizeService,
                private errorHandlerService: ErrorHandlerService,
                private dialog: MatDialog,
                private dashboardService: DashboardService) {
    }

    openEditDialog(dashboardId: string, widgetId: string): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            widgetId: widgetId,
            dashboardId: dashboardId,
        };
        const editDialogRef = this.dialog.open(ChartsExportEditDialogComponent, dialogConfig);

        editDialogRef.afterClosed().subscribe((saved: boolean) => {
            if (saved === true) {
                this.dashboardService.initDashboard();
            }
        });
    }

    getData(id: string, limit: number): Observable<ChartsExportModel> {
        return this.http.get<ChartsExportModel>(environment.influxAPIURL + '/measurement/' + id + '?limit=' + limit).pipe(
            map(resp => resp || []),
            catchError(this.errorHandlerService.handleError(DeploymentsService.name, 'getData', {} as ChartsExportModel))
        );
    }


    getChartData(widgetId: string, measurementId: string, interval: number, hAxisLabel: string, vAxisLabel: string): Observable<ChartsModel> {
        return new Observable<ChartsModel>((observer) => {
            this.getData(measurementId, interval).subscribe((resp: ChartsExportModel) => {
                observer.next(this.setProcessInstancesStatusValues(widgetId, hAxisLabel, vAxisLabel, this.setData(resp.results[0].series[0].values)));
                observer.complete();
            });
        });
    }

    private setData(exportData: (string | number)[][]): ChartDataTableModel {

        const dataTable = new ChartDataTableModel([['Date', 'Count']]);
        exportData.forEach((item: (string | number)[]) => {
            const date = new Date(<string>item[0]);
            dataTable.data.push([date, item[1]]);

            }
        );
        return dataTable;

/*        function getTooltipText(date: Date, count: number): string {
            return date.toLocaleDateString() + '\n' + 'count: ' + count; // todo: translation
        }*/
    }


    private setProcessInstancesStatusValues(widgetId: string, hAxisLabel: string, vAxisLabel: string, dataTable: ChartDataTableModel): ChartsModel {

       const element = this.elementSizeService.getHeightAndWidthByElementId(widgetId);

        return new ChartsModel(
            'LineChart',
            dataTable.data,
            {
                chartArea: {left: 80, top: 20, width: '70%', height: '65%'},
                hAxis: {format: 'HH:mm:ss', title: hAxisLabel},
                height: element.height,
                width: element.width,
                legend: 'none',
                vAxis: {title: vAxisLabel},
            });
    }
}
