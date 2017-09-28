(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all; //sets the current room values from the values of the firebase room object.
    }

    angular //
        .module('blocChat') //registers which app the controller is for.
        .controller('HomeCtrl', ["Room", HomeCtrl]); //registers controller with dependancy injector ('function name', ["dependancy name", Actualy Function Name])
})();
