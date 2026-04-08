const container = document.querySelector("#container");

function getRandom(){
    let number = Math.floor(Math.random() * 256);
    return number;
}

function reset(){
    container.textContent = "";
    createGrid(100);
}


function createGrid(size){
    for(let i = 1; i <= size; i++){
        for(let j =1; j <= size; j++){
        const divs = document.createElement("div");
            divs.setAttribute("style", `width: calc(100%/ ${size})`)
            divs.setAttribute("class", "divs");
            container.appendChild(divs);

            container.addEventListener("mouseover", (e) => {
    if(e.buttons === 1 && e.target.classList.contains("divs")){
        e.target.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
    }
});
/*
            divs.addEventListener("mouseover", () => {
                divs.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
            }
        )
       */
    }
}
}
createGrid(100);
console.log(getRandom());