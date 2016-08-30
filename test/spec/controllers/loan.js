'use strict';

describe('Controller: loanCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var loanCtrl, scope, timerCallback;
  var rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    timerCallback = jasmine.createSpy('timerCallback');
    
    jasmine.Clock.useMock();
    scope = $rootScope.$new();
    rootScope = $rootScope;
    loanCtrl = $controller('loanCtrl', {
      $scope: scope
    });

  }));


  it('Title should be equal to Current Loan', function () {
    console.log("asd1: ",scope);
    expect(scope.msg).toEqual('Current Loans');
  });


  it('Total Amount should be not null', function () {
    
    var totalAmountAvailable = scope.totalAmountAvailable;

    waits(7000);
    runs(function() {
      expect(scope.totalAmountAvailable).not.toBeNull();
    });
    
  });


});
