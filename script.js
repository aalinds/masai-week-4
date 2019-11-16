var sudokuMatrix = [
    [4,3,5,2,6,9,7,8,1],
    [6,82571493],
    [197834562],
    [826195347],
    [374682915],
    [951743628],
    [519326874],
    [248957136],
    [763418259]
]

// Inserting 9 child div with class "miniGrid" into "sudokuGrid" Div
function appendMiniGridDivs() {
    for(var i = 1; i <= 9; i++) {
        var sudokuGrid = document.getElementById("sudokuGrid");
        var miniGrid = document.createElement("div");

        miniGrid.setAttribute("class", "miniGrid");
        sudokuGrid.appendChild(miniGrid);
    }
}

appendMiniGridDivs();

// Inserting 9 child div with class "cell" into each "miniGrid" div
function appendCellDivs() {
    var miniGrid = document.getElementsByClassName('miniGrid');
    var cellCount = 0;
    for(var i = 0; i < miniGrid.length; i++) {
        for(var j = 0; j < 9; j++) {
            cellCount++;
            var cell = document.createElement("div");

            if(j == 3 || j == 4 || j == 5 || i == 3 || i == 4 || i == 5) {
                cell.setAttribute("class", "cell grey");
            } else {
                cell.setAttribute("class", "cell lightGrey");
            }
            cell.setAttribute("id", "cell" + i + j);          

            miniGrid[i].appendChild(cell);
        }
    }
}

appendCellDivs();

var primaryCellId = "";

// After clicking primary "cell" divs..
function primaryCellClick() {
    primaryCellId = parseInt((this.id).split("cell")[1]);
    console.log("primary Cell: " + this.id);
}

// After clicking secondary "cell" divs
function secondaryCellClick() {
    var secondaryCellVal = Number(this.textContent);
    
    if(primaryCellId !== "") {
        var tempCell = document.getElementById("cell" + primaryCellId);
        tempCell.textContent = secondaryCellVal;
        primaryCellId = "";
    }
    console.log("Secondary Cell");
}

// On double clicking a primary "cell" div reset it's value
function primaryCellDblClick() {
    if(primaryCellId !== "") {
        document.getElementById("cell" + primaryCellId).textContent = "";
    }
    console.log("Double Click")
}

// Adding click listener on each "cell" div
function addClickToCell() {
    var cellDivs = document.querySelectorAll(".cell");

    for(var i = 0; i < cellDivs.length; i++) {
        if(i < 81) {
            cellDivs[i].addEventListener("click", primaryCellClick);
            cellDivs[i].addEventListener("dblclick", primaryCellDblClick);
        } else {
            cellDivs[i].addEventListener("click", secondaryCellClick);
        }
        
    }
}

addClickToCell();

function newGame() {
    alert("new Game")
}