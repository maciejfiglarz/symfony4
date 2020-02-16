const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
// directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */

    .addEntry('app', './assets/js/app.js')
    .addEntry('post-new', ['regenerator-runtime/runtime','./assets/js/entry/post-new.js'])
    .addEntry('post-single', './assets/js/entry/post-single.js')
    .addEntry('post-list', './assets/js/entry/post-list.js')
    .addEntry('authorization', './assets/js/entry/authorization.js')
    .addEntry('ckeditor', ['regenerator-runtime/runtime', './assets/js/entry/ckeditor.js'])
    // .addEntry('access-block', './assets/js/components/access-block.js')

    // .addLoader({
    //     test: /\.js$/,
    //     enforce: 'pre',
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/,
    //     options: {
    //         fix: true
    //     }
    // })
    // .addEntry('excursion', './assets/js/excursion.js')
    // .addEntry('excursion-details', './assets/js/excursion-details.js')


    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()
    .copyFiles([
        {
            from: './assets/images',
            to: 'images/[path][name].[hash:8].[ext]'
        },
        {
            from: './assets/fonts',
            to: 'fonts/[path][name].[ext]'
        }
    ])
    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()


    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

// uncomment if you use API Platform Admin (composer req api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/js/admin.js')
;
const config = Encore.getWebpackConfig();

const babelLoader = config.module.rules.find(
    rule =>
        rule.use &&
        rule.use[0] &&
        rule.use[0].loader === 'babel-loader'
);

delete babelLoader.exclude;

module.exports = Encore.getWebpackConfig();
