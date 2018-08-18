import {Component, OnInit} from '@angular/core';
import {ControlWidget} from '@delon/form';
import * as format from 'date-fns/format';
import {toBool} from '../util';

const DATEFORMAT = {
    'date-time': `YYYY-MM-DDTHH:mm:ssZ`,
};

const DEFAULTFORMAT = 'YYYY-MM-DD HH:mm:ss';

@Component({
    selector: 'by-sf-widget-treeSelect',
    template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-tree-select nzPlaceHolder="请选择" [(ngModel)]="i.category_id" [nzNodes]="categoryIdNodes" (ngModelChange)="categoryIdChange($event)"
      [nzDropdownMatchSelectWidth]="true" [nzSize]="'middle'" [nzDropdownStyle]="{ 'max-height': '400px','width':'100%'}">
      </nz-tree-select>
  </sf-item-wrap>
  `,
    preserveWhitespaces: false,
})
export class BySfTreeSelectWidget extends ControlWidget implements OnInit {
    format: string;
    i: any;

    ngOnInit(): void {

    }

}
