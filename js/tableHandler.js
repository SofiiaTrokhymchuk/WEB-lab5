const table = document.getElementById("table");
const variant = 5;

export function createTable(){
    let tableContent = "";
    for(let i = 1; i <= 36; i++){
        if(i % 6 === 1){
            tableContent += "<tr>";
        }
        if(i === variant){
            tableContent += `<td id="variant">${i}</td>`; 
        }else{
            tableContent += `<td>${i}</td>`; 
        }
    }
    table.innerHTML = tableContent;
}

export function handleTableActions(){
    const variantCell = document.getElementById("variant");
    const colorPicker = document.getElementById("color-picker");

    variantCell.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        variantCell.style.background = `#${randomColor}`;
    });

    variantCell.addEventListener("click", () => {
        colorPicker.click();
        handleColorPicker(variantCell, colorPicker);
    });

    handleColorPicker(variantCell, colorPicker);

    variantCell.addEventListener("dblclick", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        table.querySelectorAll("td").forEach(cell => {
            if(cell.id !== "variant"){
                cell.style.background = `#${randomColor}`
            }
        });
    })
}

function handleColorPicker(variantCell, colorPicker){
    colorPicker.addEventListener("change", (event) => {
        let selectedColor = event.target.value;
        variantCell.style.background = selectedColor;
    });
}
