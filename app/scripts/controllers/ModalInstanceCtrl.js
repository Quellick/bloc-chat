(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.cancel = function() {
          $uibModalInstance.dismiss('dismiss')
        }
        this.submit = function () {
          Room.$add(this.newRoom);
          $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()
