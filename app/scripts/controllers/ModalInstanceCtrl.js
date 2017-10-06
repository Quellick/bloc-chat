(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.cancel = function() { //removes the modal if user clicks cancel.
          $uibModalInstance.dismiss('canceled')
        }
        this.submit = function () { //remove the modal if user submits new room name.
          $uibModalInstance.close(this.newRoom);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', "Room", ModalInstanceCtrl])
})()
