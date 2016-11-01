'use strict';

import testTpl from './test.html';

function testComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: testTpl,
    controller: TestController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function TestController () {
	  $log.debug('Hello from header controller!');
  }

}

export default testComponent;
