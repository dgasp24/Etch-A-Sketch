const container = document.querySelector("#container");
const userSelect = document.querySelector("#userSelection");
const left = document.querySelector("#left");

function getRandom(){
    let number = Math.floor(Math.random() * 256);
    return number;
}

function reset(){
    const gridInfo = document.querySelector("#info");

    if(gridInfo){
        gridInfo.remove();
    }
    container.textContent = "";
    createGrid(16);
}

function grabValue(){
    const input = document.querySelector("#input"); //Input Box
    let gridInfo = document.querySelector("#info");
    let value = +input.value;

    if(!gridInfo){ //If gridInfo doesn't exist, create one
        gridInfo = document.createElement("div");
        gridInfo.setAttribute("id", "info");
        gridInfo.classList.add("left-side");
        left.appendChild(gridInfo);
    }

    //Resets div so no repeats
     gridInfo.textContent = "";

    //Creates text content in gridInfo where it tells grid size or if theres an invalid input
    if(value < 16 || value > 100){
        gridInfo.style.fontSize = "18px";
        gridInfo.textContent = "Invalid input, please put a number between 16 and 100!";
        return;
    }else{
        gridInfo.style.fontSize = "60px";
        gridInfo.textContent = `${value}x${value}`;
        createGrid(value);
    }
}


function createGrid(size){
    container.textContent = "";
    for(let i = 1; i <= size; i++){
        for(let j =1; j <= size; j++){
        const divs = document.createElement("div");
            divs.setAttribute("style", `width: calc(100%/ ${size}); background-color: white`)
            divs.setAttribute("class", "divs");
            container.appendChild(divs);

            divs.addEventListener("mouseover", () => {
                divs.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
                divs.style.opacity = Math.min((+divs.style.opacity || 0) + 0.1, 1);
            }
        )
    }
}
}