(function() {
    function HomeCtrl(Room, Message, $scope,  $uibModal, $cookies) {
      this.rooms = Room.all; //sets the current room values from the values of the firebase room object.
      this.currentUser = $cookies.get('blocChatCurrentUser');

      this.setActiveRoom = function (room) {
        $scope.currentRoom = room;
        $scope.messages = Message.getByRoomId(room.$id);
        console.log($scope.currentRoom);
        console.log($scope.messages);
      }

      this.sendMessage = function (messageContent) {
        var newMessage = {
        //set roomId to currently selected room
        roomId: $scope.currentRoom.$id,
        //set username to current user
        username: this.currentUser,
        //set sentAt time based on firebase database TIMESTAMP
        sentAt: firebase.database.ServerValue.TIMESTAMP,
        //
        content: messageContent,
        }
        //fire send function from message service with content of new message
        Message.send(newMessage);
        $scope.newMessage = "";
      }
}
    angular //
        .module('blocChat') //registers which app the controller is for.
        .controller('HomeCtrl', ["Room", "Message", "$scope", "$uibModal", "$cookies", HomeCtrl]); //registers controller with dependancy injector ('function name', ["dependancy name", Actualy Function Name])
})();
