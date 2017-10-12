(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.all = messages; //populates the Message object with all the available messages

    Message.getByRoomId = function(roomId) {
       //console.log(messages);
       return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
