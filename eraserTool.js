function EraserTool(){
	//set an icon and a name 
	this.icon = "assets/eraser.jpg";
	this.name = "eraserTool";
	//initialize to false if it not selected
	this.eraserSelected = false; 

	this.draw = function(){
		//if the mouse is pressed eraser on the canvas
		if(mouseIsPressed){
			this.eraserSelected = true
			if (this.eraserSelected){
				push();
				fill(255);
				stroke(255);
				ellipseMode(CENTER);
				ellipse(mouseX, mouseY, this.eraserSizeSlider.value());
				pop();
			}	 
			else {
				//when mouse not pressed set it to false
				this.eraserSelected = false;
			}
		} 		
	}

	//clear options
	this.unselectTool = function() {
		select("#sizeOfControl").html("");
		strokeWeight(1);
	};

	//create div and slider options
	this.populateOptions = function() {
		this.eraserSizeText = createDiv('Eraser size: ');
		this.eraserSizeText.parent("#sizeOfControl");
		this.eraserSizeSlider = createSlider(10,150,10);
		this.eraserSizeSlider.parent("#sizeOfControl");
	};
}