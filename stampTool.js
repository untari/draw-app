
function StampTool(){
    this.name = "StampTool";
    this.icon = "assets/star.jpg";

    var star = loadImage('assets/star.jpg');
    var starSize = 50;

    //create variable for slider
    var starSizeSlider;

    starSizeSlider = createSlider(5, 50, 20);
    starSizeSlider.parent("#sizeOfStarControl");

    this.draw = function(){
        
        if(mouseIsPressed){
            //create new variables for when mouse is pressed 
            var starX = mouseX - starSize/2;
            var starY = mouseY - starSize/2;
            //change mouseX and mouseY variables into starX and starY 
            image(star, starX, starY, starSize, starSize);
        }
    }


}
