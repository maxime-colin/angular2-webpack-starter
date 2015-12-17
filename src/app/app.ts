/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';


import {Home} from './home/home';



/*
 * App Component
 * Top Level Component
 */
@Component({
	// The selector is what angular internally uses
	// for `document.querySelectorAll(selector)` in our index.html
	// where, in this case, selector is the string 'app'
	selector: 'app', // <app></app>
	// We need to tell Angular's Dependency Injection which providers are in our app.
	providers: [ FORM_PROVIDERS],
	// We need to tell Angular's compiler which directives are in our template.
	// Doing so will allow Angular to attach our behavior to an element
	directives: [ ROUTER_DIRECTIVES ],
	// We need to tell Angular's compiler which custom pipes are in our template.
	pipes: [],
	// Our list of styles in our component. We may add more to compose many styles together
	// Every Angular template is first compiled by the browser before Angular runs it's compiler
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
	{ path: '/', component: Home, name: 'Home' }
])
export class App {
	url: string = 'https://twitter.com/AngularClass';
	constructor() {
	}
}
