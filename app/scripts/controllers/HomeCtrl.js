(function() {
    function HomeCtrl(Room, Message, $scope,  $uibModal) {
      this.rooms = Room.all; //sets the current room values from the values of the firebase room object.

      this.setActiveRoom = function (room) {
        $scope.currentRoom = room;
        $scope.messages = Message.getByRoomId(room.$id);
        console.log($scope.currentRoom);
        console.log($scope.messages);
    }
}
    angular //
        .module('blocChat') //registers which app the controller is for.
        .controller('HomeCtrl', ["Room", "Message", "$scope", "$uibModal", HomeCtrl]); //registers controller with dependancy injector ('function name', ["dependancy name", Actualy Function Name])
})();
