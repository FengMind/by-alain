import {Component, OnInit} from '@angular/core';
import {SFSchema} from '@delon/form';
import {NzMessageService} from 'ng-zorro-antd';

declare var hljs: any;

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit {
    code: any;
    i: any;
    schema: SFSchema = {
        properties: {
            'date_number': {
                'type': 'number',
                ui: {widget: 'by-date'}
            },
            'range': {
                'type': 'number',
                ui: {widget: 'by-date', mode: 'range'}
            },
            'week': {
                'type': 'number',
                ui: {widget: 'by-date', mode: 'week'}
            },
            'month': {
                'type': 'number',
                ui: {widget: 'by-date', mode: 'month'}
            }
        }
    };

    constructor(private msg: NzMessageService) {
    }

    ngOnInit() {
        this.i = {
            // date_number: (new Date()).valueOf(),
            //range: [1513051932, 1513051932]
        };

        hljs.initHighlightingOnLoad();
        this.code = `
            export class DateComponent implements OnInit {
                code: any;
                i: any;
                schema: SFSchema = {
                    properties: {
                        'date_number': {
                            'type': 'number',
                            ui: {widget: 'by-sf-widget-date'}
                        },
                        'range': {
                            'type': 'number',
                            ui: {widget: 'by-sf-widget-date', mode: 'range'}
                        },
                        'week': {
                            'type': 'number',
                            ui: {widget: 'by-sf-widget-date', mode: 'week'}
                        }
                    }
                };
                constructor() {
                }
                ngOnInit() {
                    this.i = {
                        date_number: (new Date()).valueOf(),//null或0
                        range: [1513051932, 1513051932],//null或[0,0]
                        // week:null
                        // month:0
                    };
                }
            }
        `;

    }

    submit(value: any) {
        this.msg.success(JSON.stringify(value));
    }

    change(value: any) {
        // this.msg.success(JSON.stringify(value));
    }

}
