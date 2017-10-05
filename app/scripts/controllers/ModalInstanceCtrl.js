(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.cancel = function() {
          $uibModalInstance.dismiss('dismiss')
        }
        this.submit = function () {
          $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room',  ModalInstanceCtrl])
})()
