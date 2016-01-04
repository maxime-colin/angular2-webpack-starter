import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterOutlet, RouterLink} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {BoardStorageService} from '../providers/board-storage-service';
import {BoardInterface} from '../interfaces/board';


@Component({
	selector: 'home',
	styles: [ require('./home.css') ],
	template: require('./home.html'),
	directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],
	providers: [BoardStorageService]
})
export class Home {

	public boards: BoardInterface[];

	constructor(service: BoardStorageService) {

		var that = this;

		service.getList().subscribe(function(value: any) {
			that.boards = value;
		});

	}


}
