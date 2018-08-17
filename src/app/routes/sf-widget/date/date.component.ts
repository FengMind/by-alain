import {Component, OnInit} from '@angular/core';
import {SFSchema} from '@delon/form';
import {NzMessageService} from 'ng-zorro-antd';

declare var $: any;
declare var hljs: any;

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
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
            }
        }
    };

    constructor(private msg:NzMessageService) {
    }

    ngOnInit() {
        this.i = {
            date_number: (new Date()).valueOf(),
            range: [1513051932, 1513051932]
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
                        }
                    }
                };
                constructor() {
                }
                ngOnInit() {
                    this.i = {
                        date_number: (new Date()).valueOf(),
                        range: [1513051932, 1513051932]
                    };
                }
            }
        `;

    }

    submit(value: any) {
        this.msg.success(JSON.stringify(value));
    }

    change(value: any) {
        this.msg.success(JSON.stringify(value));
    }

}
