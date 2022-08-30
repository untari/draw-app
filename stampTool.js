
function StampTool(){
        //Declare icon and name 
        this.icon = "assets/shapes.png";
        this.name = "StampTool";

   
        // available shapes
        let shapes = ["Rectangle", "Triangle", "Circle"];
        // the current shape. and changes via the dropdown 
        let selectedShape = shapes[0];
        // sign the shapeState into null
        let shapeState = null;
        
        this.draw = function() {
            if(mouseIsPressed) {
                //starts drawing the shape
                if (shapeState.x == -1 && shapeState.y == -1) {
                    shapeState.x = mouseX;
                    shapeState.y = mouseY;
                } else {
                    //dragging the mouse to make the shapes small or bigger
                    shapeState.w = mouseX - shapeState.x;
                    shapeState.h = mouseY - shapeState.y;
                    // reset the canvas and draw the new shape
                    updatePixels();
                    if (selectedShape == "Rectangle") {
                        //draw the rectangle
                        rect(shapeState.x, shapeState.y, shapeState.w, shapeState.h);
                    } else if (selectedShape == "Triangle") {
                        //draw the triangle
                        triangle(shapeState.x, shapeState.y - shapeState.h, 
                            shapeState.x - shapeState.w, shapeState.y + shapeState.h, 
                            shapeState.x + shapeState.w, shapeState.y + shapeState.h);
                    } else if (selectedShape == "Circle") {
                        // draw the circle around x, y with radius = max(width, height)
                        ellipse(shapeState.x, shapeState.y, Math.max(shapeState.w, shapeState.h) * 2.0);
                    }
                }
            } else {
                //when you let go the mouse, it stop drawing
                if (shapeState.x != -1) {
                    resetshapeState();
                    // to save the copy of image in memory permenantly
                    loadPixels();
                }
            }
        }

        //to reset the options html when tool is unselected
        this.unselectTool = function() {
            select(".options").html("");
        }

        // create dropdown that generates the DOM dropdown box with shapes options
        this.populateOptions = function() {
            let shapeSelect = createSelect();
            for(let i=0; i<shapes.length; i++) {
                shapeSelect.option(shapes[i]);
            }
            shapeSelect.parent(select(".options"));
            shapeSelect.changed(()=> {
                selectedShape = shapeSelect.value();
            });
        }

        //to reset the shapeState 
        let resetshapeState = function() {
            shapeState = {
                x: -1, 
                y: -1,
                w: -1,
                h: -1
            }
        }
        resetshapeState();
    

}
