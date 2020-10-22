class Form{

    constructor(){

    }

display(){
    var Title = createElement('h2');
    Title.html("Car Racing Game!");
    Title.position(30,0);

    var input = createInput("name");
    var button = createButton("Play");
    var greet = createElement("h3");
    input.position(130,160);
    button.position(250,200);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        
        var name= input.value();
        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);
        greet.html("Welcome "+ name);
        greet.position(130,160);

    })

}


}