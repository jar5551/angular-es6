'use strict';

import moviesTpl from './movies.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('movies', {
      url: '/movies',
      templateUrl: moviesTpl,
      controller: require('./movies.controller'),
      controllerAs: 'movies'
    });

}

export default routeConfig;
