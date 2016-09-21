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