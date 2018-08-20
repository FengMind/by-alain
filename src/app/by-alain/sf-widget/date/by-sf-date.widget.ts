import {Component, OnInit} from '@angular/core';
import {ControlWidget} from '@delon/form';
import * as format from 'date-fns/format';
import {toBool} from '../util';

const DATEFORMAT = {
    'date-time': `YYYY-MM-DDTHH:mm:ssZ`,
};

const DEFAULTFORMAT = 'YYYY-MM-DD HH:mm:ss';

@Component({
    selector: 'by-sf-widget-date',
    template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ng-container [ngSwitch]="mode">
      <nz-month-picker *ngSwitchCase="'month'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
      ></nz-month-picker>
      <nz-week-picker *ngSwitchCase="'week'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
      ></nz-week-picker>
      <nz-range-picker *ngSwitchCase="'range'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzRanges]="ui.ranges"
        (nzOnOk)="_ok($event)"
      ></nz-range-picker>
      <nz-date-picker *ngSwitchDefault
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzShowTime]="ui.showTime"
        [nzShowToday]="i.showToday"
        (nzOnOk)="_ok($event)"
      ></nz-date-picker>
    </ng-container>
  </sf-item-wrap>
  `,
    preserveWhitespaces: false,
})
export class BySfDateWidget extends ControlWidget implements OnInit {
    static readonly KEY = 'by-sf-widget-date';
    ode: string;
    displayValue: Date | Date[] = null;
    displayFormat: string;
    format: string;
    i: any;
    mode: any;

    ngOnInit(): void {
        const ui = this.ui;
        this.mode = ui.mode || 'date';
        if (!ui.displayFormat) {
            switch (this.mode) {
                case 'month':
                    this.displayFormat = `yyyy-MM`;
                    break;
                case 'week':
                    this.displayFormat = `yyyy-ww`;
                    break;
            }
        }
        this.format = ui.format ? ui.format : this.schema.type === 'number' ? 'x' : 'YYYY-MM-DD HH:mm:ss';
        // 公共API
        this.i = {
            allowClear: toBool(ui.allowClear, true),
            // nz-date-picker
            showToday: toBool(ui.showToday, true)
        };
    }

    reset(value: any) {
        if (!Array.isArray(value)) {
            if (value == null || value === 0) { // 默认值
                if (this.mode === 'range') {
                    value = [new Date(), new Date()];
                } else {
                    value = new Date();
                }
            } else {
                if (value.toString().length === 10) {
                    value = value * 1000;
                }
                value = new Date(value);
            }
            this.displayValue = value;
        }
        else {
            let dateValue = [];
            if (value.length === 0) {
                dateValue = [new Date(), new Date()];
                this.displayValue = dateValue;
            }
            else {
                value.map(d => {
                    if (d.toString().length === 10) {
                        d = d * 1000;
                    }
                    if (d === 0) {
                        d = (new Date()).valueOf();
                    }
                    dateValue.push(new Date(d));
                });
            }
            this.displayValue = dateValue;
        }
        this._change(this.displayValue); // 初始值setValue()
    }

    _change(value: Date | Date[]) {
        if (value == null) {
            this.setValue(null);
            return;
        }
        // FengMind
        if (!Array.isArray(value)) {
            if (this.schema.type === 'number') {
                let x = 0;
                const dateValue = +format(<Date>value, 'x');
                if (dateValue.toString().length === 13) {
                    x = Math.trunc(dateValue / 1000);
                }
                this.setValue(x);
            } else {
                this.setValue(format(value, this.format));
            }
        } else {
            if (this.schema.type === 'number') {
                let dateValue = [];
                value.map(d => {
                    let x = +format(<Date>d, 'x');
                    if (x.toString().length === 13) {
                        x = Math.trunc(x / 1000);
                    }
                    dateValue.push(x);
                });
                this.setValue(dateValue);
            } else {
                this.setValue(value.map(d => format(d, this.format)));
            }
        }
    }

    _openChange(status: boolean) {
        if (this.ui.onOpenChange) this.ui.onOpenChange(status);
    }

    _ok(value: any) {
        if (this.ui.onOk) this.ui.onOk(status);
    }

}
