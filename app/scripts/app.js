'use strict';


var app = angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
]);


app.factory('Model', ['$http',function($http) {

  var _loadLoansAvailable = function(){
    return $http.get('current-loans.json');
  }

  return {    
    loadLoansAvailable: function() { return _loadLoansAvailable() }
  };

}]);

app.filter('millToDate', function() {
  return function(termRemaining) {
    
    // I WILL CONSIDER THE TERM_REMAINING IN SECONDS AND I WILL CONVERT IN MONTHS AND DAYS
    var day = 60 * 60 * 24;
    var days = Math.floor(termRemaining/day);
    var labelMonth;
    var months;
    if (days > 31) {
      months = Math.floor(days/31);
      days = days - (months*31);
      if (months > 9) {
        labelMonth = 'Months'; 
      }else{
        labelMonth = 'Month';
      }
    }
    var labelDay;
    if (days > 9) {
      labelDay = 'Days'; 
    }else{
      labelDay = 'Day';
    }

    if (months != null) {
      return months+' '+labelMonth+' '+days+' '+labelDay;
    }else{
      return days+' '+labelDay;
    }
  }
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/loan', {
      controller: 'loanCtrl',
      templateUrl: 'views/loan.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
