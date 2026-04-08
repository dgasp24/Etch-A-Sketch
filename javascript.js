const container = document.querySelector("#container");

function getRandom(){
    let number = Math.floor(Math.random() * 256);
    return number;
}



function createGrid(size){
    for(let i = 1; i <= size; i++){
        for(let j =1; j <= size; j++){
        const divs = document.createElement("div");
            divs.setAttribute("style", `width: calc(100%/ ${size})`)
            divs.setAttribute("class", "divs");
            container.appendChild(divs);

            divs.addEventListener("mouseover", () => {
                divs.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
            }

        )
    }
}
}
createGrid(16);
console.log(getRandom());