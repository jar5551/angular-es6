'use strict';

import * as route from './movies.route';
import * as testModule from '../../components/test/test.module';

const moviesPageModule = angular.module('movies-module', [
  'ui.router'
]);

moviesPageModule
    .config(route);

export default moviesPageModule;
