const container = document.getElementById("gridContainer");
let alpha = 0.1;

function addOpaque(square){
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    //let alpha = 0.1;

    if(square.style.background == ""){
        square.style.background = "rgba(" + green + "," +red+","+blue+","+alpha;
    } 
    else{
        let currentColor= square.style.background;
        currentColor = currentColor.split(",");
        let currentRed= currentColor[0].slice(5,currentColor[0].length);
        let currentGreen= currentColor[1];
        let currentBlue = currentColor[2];
        currentColor[3] = currentColor[3].slice(0,-1);
        let newAlpha = parseFloat(currentColor[3])+0.1;

        if(newAlpha>0.9){
            console.log("fin");
            return

        }

        square.style.background = "rgba(" + currentRed + "," +currentGreen+","+currentBlue+","+newAlpha;

        console.log(newAlpha);
    }
}

function addColor(square){
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();

    square.style.background = "rgba(" + green + "," +red+","+blue+","+alpha;
    console.log(square.style.background);
}

function hexTorgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
  }


function chooseColor(square){
    const chosenColor= document.getElementById("colorpick");
    let chosenColorRGB= hexTorgb(chosenColor);
    console.log(square.style.background);
    
    square.style.background= "rgba(" +chosenColorRGB[0]  + "," +chosenColorRGB[1]+","+chosenColorRGB[2]+","+alpha;
}

function randomColor(){
    let x = Math.floor(Math.random()*360);
    return x;
}


function createSquares(num){
    const height = 500/num-2;

    for (i=0;i<num;i++)
    {
        const col = document.createElement("div");
        col.classList.add("col");
            for (j=0;j<num;j++)
        {   
            const square = document.createElement("div");
            square.classList.add("grid");
            square.style.height= height+"px";
            square.style.width= height+"px";

            col.appendChild(square);
            container.appendChild(col);

            
        }
        
    }

    const allSquares = document.querySelectorAll(".grid");

    allSquares.forEach(square => square.addEventListener('mouseout', checkMode));
    
    

}

const button = document.getElementById("button");
button.addEventListener("click", () => {
    let userInput = prompt("Please enter the size of your grid ");
    userInput = parseInt(userInput);
    console.log(userInput)
    while (isNaN(userInput) || userInput<1){
        console.log(userInput)
        alert("Please enter a number over 0");
        userInput = prompt("Please enter the size of your grid ");
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    createSquares(userInput);
});


function checkMode(){
    if(document.getElementById("choose").checked){
        chooseColor(this);
        //console.log(this);
    }
    else if (document.getElementById("random").checked){
        addColor(this);
        console.log("random");
    }
    else if (document.getElementById("opaque").checked){
        addOpaque(this);
        console.log("opaque");
    }
}

createSquares(16);