// Dependencies
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import 'angular-chart.js';

// Client Modules
import { name as Titlebar } from '../titlebar/titlebar';
import { name as Average } from '../average/average';
import { name as Health } from '../health/health';
import { name as Travel } from '../travel/travel';

// Templates
import template from './gradeFactors.jade';

// GradeFactors Application
class GradeFactors {}

const name = 'gradeFactors';

export default angular.module(name, [
  angularMeteor,
  ngMaterial,
  uiRouter,
  Titlebar,
  Average,
  Health,
  Travel,
  'chart.js'
])
.component(name, {
  template,
  controllerAs: name,
  controller: GradeFactors
})
.config(config)

// App Configuration
function config($locationProvider, $urlRouterProvider, $qProvider, $mdThemingProvider, $mdIconProvider){
  'ngInject';

  // Router Config
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  // Google Material Theme
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('blue-grey');

  // Google Material Icons
  const iconPath = '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
  $mdIconProvider
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
}