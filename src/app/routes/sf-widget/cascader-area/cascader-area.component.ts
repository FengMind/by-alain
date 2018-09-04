import {Component, OnInit} from '@angular/core';
import {SFSchema} from '@delon/form';

@Component({
    selector: 'cascader-area',
    templateUrl: './cascader-area.component.html',
    styleUrls: ['./cascader-area.component.less']
})
export class CascaderAreaComponent implements OnInit {
    code: any;
    i: any;
    schema: SFSchema = {
        properties: {
            'cascader-area': {
                type: 'number',
                title: '省市区联动',
                ui: {
                    widget: 'by-cascader-area',
                },
                default: [111,11101,1110101]
            }
        }
    };

    constructor() {
    }

    ngOnInit() {
    }

}
