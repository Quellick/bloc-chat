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
    // parameter name is arbitrary is being passed the value from the function that calls it.
    Message.send = function(messageObject) {
        // Send method logic
        messages.$add(messageObject);
    };

    return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
