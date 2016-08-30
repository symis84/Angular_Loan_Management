angular.module('webApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;

  $ctrl.investNow = function(val){
    
    var valAvailable = parseFloat( $ctrl.items.available.replace(',','') );
    if (!isNaN(val) && val <= valAvailable){
      $uibModalInstance.close( { id:$ctrl.items.id,val:val } );
    }
  }

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});