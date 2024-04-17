
//Detecting Button Press


//This for loop is for all the buttons in the drum class, and ends when there are no more of them
//It's better than typing them one by one.
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){

    //This part searches for all the buttons in the drum class and add an eventListener, 
    //so when clicked it activates the handleClick function
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    //Function for the action when buttons are clicked
    function handleClick(){

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimations(buttonInnerHTML);
    }


}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimations(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();                
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();  
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
            break;            
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();  
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break; 

        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();  
            break;

        default:
    }
    
}

//Animating the Buttons

function buttonAnimations (currentKey){

    //Spots the class of the key in the HTML
    var activeButton = document.querySelector("." + currentKey);

    //Puts the styles when button is pressed
    activeButton.classList.add("pressed");

    //Removes the styles after a certain period
    setTimeout(function(){

        activeButton.classList.remove("pressed");
    }, 100);
}
