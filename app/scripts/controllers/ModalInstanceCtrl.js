(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() { //removes the modal if user clicks cancel.
          $uibModalInstance.dismiss('canceled')
        }
        this.submit = function () { //remove the modal if user submits new room name.
          this.newRoom
          $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()
