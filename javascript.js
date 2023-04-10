const container = document.getElementById("gridContainer");

function addColor(){
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    //this.classList.add("blue");
    //this.style.background = "rgb(" + green + "," +red+","+blue
    //this.style.background = "hsl(" + green + ",100%,50%"
    if(this.style.background == ""){
        this.style.background = "hsl(" + green + ",100%,50%"
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