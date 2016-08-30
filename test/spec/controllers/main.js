'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var MainCtrl;
  var scope;
  var fd;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    fd = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: fd
    });
  }));

  it('should be showed a Welcome massage', function () {
    //expect(scope.awesomeThings.length).toBe(3);
    
    expect(fd.msg).toEqual('Welcome page');
    //expect(scope.msg).toEqual('Welcome page');
  });
});
