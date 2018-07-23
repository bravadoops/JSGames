function make2DArray(rows, cols) {
    var arr = new Array(rows);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}



var grid;
var rows = 20;
var cols = 20;
var w = 40;


function setup() {
    createCanvas(rows*w+1, cols*w+1);
    grid = make2DArray(rows, cols);
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < cols; j++) {
        grid[i][j] = new Cell(i, j, w);
    }
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < cols; j++) {
            grid[i][j].countNeighbors();
        }
}

function mousePressed() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
            }

        }
    }

}

function draw() {
    background(244);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }
}

