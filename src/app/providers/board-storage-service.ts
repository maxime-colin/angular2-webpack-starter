import {Injectable} from 'angular2/core';
import Firebase = require('firebase');
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BoardStorageService {

	firebaseUrl: string = 'https://mc-pad-test.firebaseio.com';

	getList() {

		let that = this;
		function resolver(observer) {
			var dataRef = new Firebase(that.firebaseUrl + '/boards');
			var query = dataRef.orderByChild('timestamp').limitToLast(100);
			query.on('value', function(messageSnapshot) {
				var messageData = messageSnapshot.val();
				messageData = Object.keys(messageData).map(function(k) {
					messageData[k]['id'] = k;
					return messageData[k];
				});

				observer.next(messageData);
			});
		}

		return new Observable(resolver);
	}


	getBoard(boardId: string) {
		let that = this;

		function resolver(resolve, reject) {
			var dataRef = new Firebase(that.firebaseUrl + '/boards/' + boardId);
			var query = dataRef.orderByChild('timestamp').limitToLast(100);
			query.on('child_added', function(messageSnapshot) {
				var messageData = messageSnapshot.val();

				messageData = Object.keys(messageData).map(function(k) {
					messageData[k]['boardId'] = k;
					return messageData[k];
				});

				resolve(messageData);
			});
		}

		return new Promise(resolver);
	}
}
