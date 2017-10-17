(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    //populates the Message object with all the available messages
    Message.all = messages; 

    Message.getByRoomId = function(roomId) {
       //console.log(messages);
       return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
        // Send method logic
    };

    return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
