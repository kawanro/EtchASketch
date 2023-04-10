const container = document.getElementById("gridContainer");

function addColor(){
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    let alpha = 0.1;

    if(this.style.background == ""){
        this.style.background = "rgba(" + green + "," +red+","+blue+","+alpha;
    } 
    else{
        let currentColor= this.style.background;
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

        this.style.background = "rgba(" + currentRed + "," +currentGreen+","+currentBlue+","+newAlpha;

        console.log(newAlpha);
    }

    
}

function randomColor(){
    let x = Math.floor(Math.random()*360);
    return x;
}


function createSquares(num){
    const height = 100/num;

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

    allSquares.forEach(square => square.addEventListener('mouseout', addColor));
    
    

}

const button = document.getElementById("button");
button.addEventListener("click", () => {
    let userInput = prompt("Please enter the size of your grid ");
    userInput = parseInt(userInput);
    if (userInput="NaN" || userInput<1){
        alert("Please enter a number over 0");
        userInput = prompt("Please enter the size of your grid ");
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    createSquares(userInput);
});

createSquares(16);