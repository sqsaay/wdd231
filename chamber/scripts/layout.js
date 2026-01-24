const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');
const display = document.querySelector('#directory-container');
gridButton.addEventListener("click", () =>{
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", ()=>{
    display.classList.add("list");
    display.classList.remove("grid");
})