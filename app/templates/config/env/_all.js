'use strict';

module.exports = {
	app: {
		title: '<%= appName %>',
		description: '<%= appDescription %>',
		keywords: '<%= appKeywords %>'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/lumx/dist/lumx.css',
				'public/lib/mdi/materialdesignicons.css',
				'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
				'public/lib/angular-formly-templates-lumx/dist/formlyLumx.css',
				'public/lib/ng-table/ng-table.min.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/velocity/velocity.js',
				'public/lib/moment/min/moment-with-locales.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', <% if (angularCookies) { %>
				'public/lib/angular-cookies/angular-cookies.js', <% } if (angularAnimate) { %>
				'public/lib/angular-animate/angular-animate.js', <% } if (angularTouch) { %>
				'public/lib/angular-touch/angular-touch.js', <% } if (angularSanitize) { %>
				'public/lib/angular-sanitize/angular-sanitize.js', <% } %>
				'public/lib/angular-messages/angular-messages.js',
				'public/lib/angular-aria/angular-aria.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/ng-table/dist/ng-table.min.js',
				'public/lib/api-check/dist/apiCheck.min.js',
				'public/lib/angular-formly/dist/formly.min.js',
				'public/lib/lumx/dist/lumx.js',
				'public/lib/angular-formly-templates-lumx/dist/formlyLumx.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
