webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('dashboard', []);

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(6);


	angular.element(document).ready(function(){
	    angular.bootstrap(document.body, ['dashboard']);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ngModule = angular.module('dashboard');

	__webpack_require__(2)(ngModule);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	    function DashboardController(gh) {
	        var _this = this;
	        _this.github = '';
	        gh.getStatus().success(function (status) {
	            _this.github = status;
	        });
	    }

	    DashboardController.$inject = ['GithubStatusService'];

	    ngModule.controller('dashboardController', DashboardController);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ngModule = angular.module('dashboard');

	__webpack_require__(4)(ngModule);
	__webpack_require__(5)(ngModule);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function (ngModule) {
	  ngModule.directive('yepNope', function YepNopeDirective() {
	    return {
	      restrict: 'E',
	      link: function (scope, element, attrs) {
	        scope.$watch(attrs.check, function (val) {
	          var words = val ? 'Yep' : 'Nope';
	          element.text(words);
	        });
	      }
	    }
	  });
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function (ngModule) {
	  ngModule.directive('test', function YepNopeDirective() {
	    return {
	      restrict: 'E',
	      replace: true,
	      template: '<div class="alert alert-danger" ng-class="{\'alert-danger\': !dashboardCtrl.github, \'alert-success\': dashboardCtrl.github}">Is GitHub Up? <yep-nope check="dashboardCtrl.github"></yep-nope></div>',
	      controller: 'dashboardController',
	      controllerAs: 'dashboardCtrl'
	    }
	  });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(7);

	var ngModule = angular.module('dashboard');

	__webpack_require__(9)(ngModule);

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	    function GithubStatusService($http) {
	        var _this = this;
	        _this.getStatus = function getStatus() {
	            return $http({
	                method: 'jsonp',
	                url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
	                transformResponse: appendTransform($http.defaults.transformResponse, function (value) {
	                    return (value.status === 'good');
	                })
	            });
	        }
	    }

	    function appendTransform(defaults, transform) {
	        defaults = angular.isArray(defaults) ? defaults : [defaults];
	        return defaults.concat(transform);
	    }

	    GithubStatusService.$inject = ['$http'];

	    ngModule.service('GithubStatusService', GithubStatusService);
	}

/***/ }
]);