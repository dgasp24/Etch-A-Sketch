const container = document.querySelector("#container");
const userSelect = document.querySelector("#userSelection");

function getRandom(){
    let number = Math.floor(Math.random() * 256);
    return number;
}

function reset(){
    container.textContent = "";
    createGrid(20);
}

function grabValue(){
    const input = document.querySelector("#input");
    let value = +input.value;

    const oldMsg = document.querySelector(".error");
    if(oldMsg){
        oldMsg.remove();
    }

    if(value < 16 || value > 100){
        const announcement = document.createElement("p");
        announcement.textContent = "Invalid Input, please put a number between 16 and 100!";
        announcement.classList.add("error");
        userSelect.appendChild(announcement);
        return;
    }else{
        createGrid(value);
    }
}


function createGrid(size){
    container.textContent = "";
    for(let i = 1; i <= size; i++){
        for(let j =1; j <= size; j++){
        const divs = document.createElement("div");
            divs.setAttribute("style", `width: calc(100%/ ${size})`)
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