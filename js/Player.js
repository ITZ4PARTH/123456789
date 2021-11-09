class Player {
  constructor() {
    //this.name = null;
   // this.index = null;
    //this.positionX = 0;
    //this.positionY = 0;
  }
  getCoount() {
    var getRef = database.ref("playerCount");
    getRef.on("value", function(data) {
      playerCount = data.val();
    });
  }
  update(count) {
    database.ref("/").update({
      playerCount:count
    });
  }
 }

