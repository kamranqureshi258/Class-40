class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      Name:this.name,
     distance:this.distance
    });
  }
  static getplayerInfo(){
    var playerref=database.ref('players')
    playerref.on("value",(data)=>{
      AllPlayers=data.val();
    }
    )

  }

}


