const mix = require('laravel-mix');

mix.js('src/main.js', 'dist/web-components.js').vue({
	version: 2,
	options: {
		shadowMode: true
	}
});

mix.sass('src/scss/app.scss', 'dist/css');
