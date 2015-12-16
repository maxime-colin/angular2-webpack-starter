import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';


@Component({
	selector: 'home',
	directives: [ FORM_DIRECTIVES ],
	styles: [ require('./home.css') ],
	template: require('./home.html')
})
export class Home {

	title:string;

	constructor() {
		this.title = 'boule';
	}


}
