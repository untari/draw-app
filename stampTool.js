
function StampTool(){
    this.name = "StampTool";
    this.icon = "assets/star.jpg";

    var star = loadImage('assets/star.jpg');
    var starSize = 50;

    this.draw = function(){

        if(mouseIsPressed){
            image(star, mouseX, mouseY, starSize, starSize);
        }
    }


}
