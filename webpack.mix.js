const mix = require('laravel-mix');

// require('laravel-mix-tailwind')
require('laravel-mix-purgecss');
require('laravel-mix-postcss-config');

mix.sass('src/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')('./tailwind.config.js'),
            require('postcss-font-magician')({
                display: 'swap',
            }),
        ],
    })
    .sourceMaps();

if (mix.inProduction()) {
    mix.purgeCss().version();
}
