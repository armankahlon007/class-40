class Player{

    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null
    
    }

    //get the playerCount  reading data from the database on() or once()
    getCount(){
        //to read the data;
    var playerCountRef= database.ref('playerCount')
    playerCountRef.on("value",(data)=>{
        playerCount=data.val()
    })
    
    }

    //update the count to the database write to the database set() or update()
    //to write the playerCount;
    updateCount(count){
    database.ref('/').update(
        {
            playerCount:count
        }
    )
    }

    //Update the name and distance of the players
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}    

//allPlayer will hold all 4 players data 
static getPlayerInfo(){
var playerInfoRef=database.ref('players')
playerInfoRef.on("value", (data)=>{
    allPlayers=data.val()
})

}


}
//set()=Overwrites at the specified location






