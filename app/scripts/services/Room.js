(function() {
  function Room($firebaseArray) {
    var Room = {}; //sets empty object name Room
    var ref = firebase.database().ref().child("Rooms"); //refrences the firebase database object holding the name of all the chat rooms
    var rooms = $firebaseArray(ref); //holds the firebase data as an array

    Room.all = rooms; // populates the Room object with all of the entries from the rooms variable.

    Room.createNewRoom = function(newRoom) {
      rooms.$add(newRoom);
      console.log(newRoom);
    }
    
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
