import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterOutlet, RouterLink, RouteParams} from 'angular2/router';

import {BoardStorageService} from '../providers/board-storage-service';
import {BoardInterface} from '../interfaces/board';


@Component({
	selector: 'board',
	styles: [require('./board.css')],
	directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],	
	template: `
		<ul >
			<li></li>
		</ul>
	`,
	providers: [BoardStorageService]
})
export class Board {

	public board: BoardInterface;

	constructor(routeParams: RouteParams, service: BoardStorageService) {

		var that = this;
		var boardId = routeParams.get('boardId');
		console.log(boardId);

		service.getBoard(boardId).then(function(value: any) {
			console.log(value);
		//	that.board = Object.keys(value).map((k) => value[k]);
		//	console.log(that.board);
		});

	}


}
