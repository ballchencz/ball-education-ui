/**
 * Created by ballchen on 2016/8/30.
 */
require.config({
    baseUrl: '/',
    paths: {
        'angular': '../node_modules/angular/angular.min',
        'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-async-loader': '../node_modules/angular-async-loader/angular-async-loader.min',
        'jquery':'../node_modules/jquery/dist/jquery.min',
        'jquery-super-slide': '../js/jquery.SuperSlide.2.1.1'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']},
        'jquery':{exports:'jquery'},
        'jquery-super-slide':{deps:['jquery']}
    }
});
