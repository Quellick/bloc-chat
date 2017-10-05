(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() { //function that opens a new modal window.
            var modalInstance = $uibModal.open({ //tells new modal what template to use and what controller is responsible for the new modal instance.
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened') //logs that the modal is open in the console

            modalInstance.result.then(function(newRoom) { //looks for a result from the input field and runs the function with the result as the parameter
                Room.createNewRoom(newRoom) //creates a new Room within the rooms object
                console.log(newRoom) //logs the name of the new room to console
            })
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})()
