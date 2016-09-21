'use strict';

var angular = require('angular');

var ngModule = angular.module('dashboard');

require('./github-status.service')(ngModule);