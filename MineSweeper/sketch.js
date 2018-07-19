function make2DArray(rows, cols) {
    var arr = new Array(rows);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

function Cell() {
    this.bee = true;
}

var grid;
var rows = 20;
var cols = 20;

function setup() {
    createCanvas(200, 200);
    grid = make2DArray(rows, cols);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j] = new Cell();
        }
    }
}


function draw() {
    background(0)
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }
}

setup();