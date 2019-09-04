const mix = require('laravel-mix');
const calc = require('postcss-calc');
const extend = require('extend');
const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV;

/* Load user config if exists */

const defaultConfig = JSON.parse(fs.readFileSync('./config.default.json'));

let config = {};

if (fs.existsSync(path.resolve(__dirname, './config.json'))) {
    config = extend(defaultConfig, JSON.parse(fs.readFileSync('./config.json')));
} else {
    config = defaultConfig;
}

mix.options({
    autoprefixer: false,
    processCssUrls: false,
    postCss: [
        calc({ precision: 10 }),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
});

mix.js('src/js/app.js', 'public/assets/js');
mix.sass('src/sass/app.sass', 'public/assets/css');

mix.browserSync({
    proxy: {
        target: config.host,
    },
    files: [
        'public/assets/css/*.css',
        'public/assets/js/*.js',
        'site/snippets/**/*.php',
        'site/templates/**/*.php',
    ],
    open: false,
    ghostMode: false,
});

mix.sourceMaps();
mix.disableSuccessNotifications();
mix.setPublicPath('public/assets');

mix.webpackConfig({
    output: {
        publicPath: '/assets/',
    },
    plugins: [],
    stats: {
        assets: false,
        chunks: false,
        hash: false,
    },
});

mix.version();