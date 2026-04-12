const container = document.querySelector("#container");
const userSelect = document.querySelector("#userSelection");
const left = document.querySelector("#left");
const color = document.querySelector("#color");
const border = document.querySelector("#border");
const black = document.querySelector("#black");
let borderActive = true;
let colorActive = true;

input.addEventListener("input", () => {
    grabValue();
});

border.addEventListener("click", () => {
    if(borderActive){
        container.classList.add("borders");
        borderActive = false;
    } else {
        container.classList.remove("borders");
        borderActive = true;
    }
});

color.addEventListener("click", () => {
    colorActive = true;
})

black.addEventListener("click", () =>{
    colorActive = false;
})


function getRandom(){
    let number = Math.floor(Math.random() * 256);
    return number;
}

function reset(){
    const gridInfo = document.querySelector("#info");

    if(gridInfo){
        gridInfo.remove();
    }
    container.replaceChildren();
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

    //Creates text content in gridInfo where it tells grid size
        gridInfo.style.fontSize = "60px";
        gridInfo.textContent = `${value}x${value}`;
        createGrid(value);
    
}


function createGrid(size){
    container.textContent = "";
    for(let i = 1; i <= size * size; i++){
        const divs = document.createElement("div");
            divs.setAttribute("style", `width: calc(100%/ ${size}); background-color: white`);
            divs.setAttribute("class", "divs");
            container.appendChild(divs);

            divs.addEventListener("mouseover", () => {
                if(colorActive){
                    divs.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
                }else {
                    divs.style.backgroundColor = "black";
                }
            divs.style.opacity = Math.min((+divs.style.opacity || 0) + 0.1, 1);
            }
        )
    }
}
