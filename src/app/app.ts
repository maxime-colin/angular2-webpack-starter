/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import 'rxjs';


import {Home} from './home/home';
import {Board} from './board/board';



/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app', // <app></app>
	providers: [ FORM_PROVIDERS],
	directives: [ ROUTER_DIRECTIVES ],
	pipes: [],
	template: `
		<header>
			<nav>
				<a [routerLink]=" ['Home'] ">Home</a>
			</nav>
		</header>

		<main>
			<router-outlet></router-outlet>
		</main>
	`
})
@RouteConfig([
	{ path: '/', component: Home, name: 'Home' },
	{ path: '/board/:boardId', component: Board, name: 'Board' },
])
export class App {

}
