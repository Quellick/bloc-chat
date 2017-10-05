(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')

            modalInstance.result.then(function(newRoom) { //looks for a result from the input field and runs the function with the result as the parameter
                rooms.$add(newRoom) //creates a new Quote within the Quote object
                console.log(newRoom) //logs all of the quotes to the console.
            })
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})()
