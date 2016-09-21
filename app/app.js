angular.module('dashboard', []);

require('./controllers');
require('./directives');
require('./services');


angular.element(document).ready(function(){
    angular.bootstrap(document.body, ['dashboard']);
});