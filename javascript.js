const container = document.getElementById("gridContainer");

function addColor(){
    //this.setAttribute('style', "background: blue;")
    this.classList.add("blue");
}


function createSquares(num){
    console.log(container);
    const height = 100/num;
    console.log(height);

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

    allSquares.forEach(square => square.addEventListener('mouseover', addColor));
    
    

}

createSquares(32);