import {Injectable} from 'angular2/core';
import Firebase = require('firebase');


@Injectable()
export class BoardStorageService {

	constructor() {

	}

	getList() {

		function resolver(resolve, reject) {
			var dataRef = new Firebase('https://mc-pad.firebaseio.com/');
			var query = dataRef.orderByChild("timestamp").limitToLast(100);
			query.on("child_added", function(messageSnapshot) {
				var messageData = messageSnapshot.val();
				resolve(messageData);
			});
		}

		return new Promise(resolver);
	}
}