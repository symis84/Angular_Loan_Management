'use strict';

angular.module('webApp')
  .controller('loanCtrl', ['$scope', '$rootScope', 'Model', '$uibModal',
    function($scope,$rootScope, Model, $uibModal) {
      $scope.msg = 'Current Loans';

      
      $scope.totalAmountAvailable = 0;
      Model.loadLoansAvailable().success(function(data, status, headers) {            
        $scope.loansAvailable = data.loans;
        $scope.loansAvailable.forEach(function(val,i){
          var valAvailable = parseFloat( val.available.replace(',','') );
          $scope.totalAmountAvailable = $scope.totalAmountAvailable + valAvailable;
        });
        $scope.totalAmountAvailable = $scope.totalAmountAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
      }).error(function(data, status, headers, config) {
        
      });

      
      
      $scope.openModal = function(index){
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'views/myModalContent.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: 'sm',
          resolve: {
            items: function () {
              return $scope.loansAvailable[index];
            }
          }
        });
        modalInstance.result.then(function (result) {

          $scope.calculateTotalAmountAvailable(result)

        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      }


      $scope.calculateTotalAmountAvailable = function(result){
        $scope.loansAvailable.forEach(function(val,i){
          if (val.id == result.id) {

            var valAvailable = parseFloat( val.available.replace(',','') );
            val.available = (valAvailable - result.val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            $scope.totalAmountAvailable = $scope.totalAmountAvailable.replace(',','') - result.val;
            val['invested'] = true;
          };

        });
        $scope.totalAmountAvailable = $scope.totalAmountAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }



}]);



