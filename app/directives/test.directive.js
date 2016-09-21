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