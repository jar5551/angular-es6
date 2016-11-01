'use strict';

import * as testDirective from './test.directive';
import './test.scss';

const testModule = angular.module('test-module', []);

testModule
  .directive('testTest', testDirective);

export default testDirective;
