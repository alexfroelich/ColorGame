var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    
   
    setUpModeButtons();
    setUpSquares();
   
    
    reset();
}

function setUpModeButtons(){
     //Mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");  
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();


        });
    }
}

function setUpSquares(){
     for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                 messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
               this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}
function reset(){
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
           squares[i].style.display = "none"; 
        }
    

    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}



resetButton.addEventListener("click", function(){
   reset();
});






function changeColors(color){
    //loop throug all squares 
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
 var random = Math.floor( Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var colorArray = [];
    //add random color to the array
    for(var i = 0; i < num; i++){
        //get random color and push into array
        colorArray.push( randomColor());
        
    }
    //return the array
    return colorArray;
}

function randomColor(){
    //pick a "red" from 0 - 255
     var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
     var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
     var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}