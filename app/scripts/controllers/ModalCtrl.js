(function() {
    function ModalCtrl($uibModal) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')
        }
        //
        this.submit = function () {
          Room.$add(this.newRoom);
          $uibModalInstance.close();
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})()
