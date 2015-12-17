import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

import {BoardStorageService} from '../providers/board-storage-service';


@Component({
	selector: 'home',
	styles: [ require('./home.css') ],
	template: require('./home.html'),
	directives: [CORE_DIRECTIVES]
})
export class Home {

	boards: any[] = [];

	constructor() {

		var service = new BoardStorageService();
		var that = this;

		service.getList().then(function(value:any) {
			that.boards = Object.keys(value).map((k) => value[k]);
		});

	}


}
