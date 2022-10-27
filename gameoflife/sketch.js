let w = 40;
let width = 400; 
let height = 400;
let cols = width / w;
let rows = height / w;
let grid = [];

function setup() {
  // put setup code here
  createCanvas(width, height);
  // background(50);
  // frameRate(5)
  for(var i = 0; i < cols; i++){
    grid[i] = []
    for(var j = 0; j < rows; j++){
      let r = round(random(0, 1));
      let alive;
      r == 1 ? alive = true : alive = false
      grid[i][j] = new Cell(i, j, alive);
    }
  }

}

function draw() {
  // put drawing code here

  // let b = new Cell(5, 1);
  // b.show(); 

  for(var i = 1; i < grid.length -1 ; i++){
    for(var j = 1; j < grid[i].length -1 ;j++){
      grid[i][j].show();
      // grid[i][j].checkNeighbours();
      // console.log(grid[i][j].neighbours)
      grid[i][j].live();
    }
  }
  
}

class Cell{

  constructor(i, j, alive){
    this.i = i;
    this.j = j;
    this.alive = alive;
    this.neighbours = [];
  }

  checkNeighbours(){
    // check all eight neigbours if alive push to neigbours array
    // if(this.i == 0 || this.i == cols - 1 || this.j == 0 || this.j == rows - 1){
    //   // this.alive = true
    // }
    // else{

    if(this.i != 0 && this.i != cols - 1 && this.j != 0 && this.j != rows - 1){

      if(grid[this.i][this.j - 1] != undefined && grid[this.i][this.j - 1]?.alive == true){
        this.neighbours.push(grid[this.i][this.j - 1])
        // console.log('neighbour UP')
      }
      if(grid[this.i + 1][this.j - 1] != undefined && grid[this.i + 1][this.j - 1]?.alive == true){
        this.neighbours.push(grid[this.i + 1][this.j - 1])
      }
      if(grid[this.i + 1][this.j] != undefined && grid[this.i + 1][this.j]?.alive == true){
        this.neighbours.push(grid[this.i + 1][this.j])
      }
      if(grid[this.i + 1][this.j + 1] != undefined && grid[this.i + 1][this.j + 1]?.alive == true){
        this.neighbours.push(grid[this.i + 1][this.j + 1])
      }
      if(grid[this.i][this.j + 1] != undefined && grid[this.i][this.j + 1]?.alive == true){
        this.neighbours.push(grid[this.i][this.j + 1])
      }
      if(grid[this.i - 1][this.j + 1] != undefined && grid[this.i - 1][this.j + 1]?.alive == true){
        this.neighbours.push(grid[this.i - 1][this.j + 1])
      }
      if(grid[this.i - 1][this.j] != undefined && grid[this.i - 1][this.j]?.alive == true){
        this.neighbours.push(grid[this.i - 1][this.j])
      }
      if(grid[this.i - 1][this.j - 1] != undefined && grid[this.i - 1][this.j - 1]?.alive == true){
        this.neighbours.push(grid[this.i - 1][this.j - 1])
      }

  }
    
  }

  live(){
    this.checkNeighbours()
    if(this.alive){
      if(this.neighbours.length < 2){
        this.alive = false;
      }
      if(this.neighbours.length == 2 || this.neighbours.length == 3){
        this.alive = true;
      }
      if(this.neighbours.length > 3){
        this.alive = false;
      }
    }
    if(!this.alive){
      if(this.neighbours.length == 3){
        this.alive = true;
      }
    }
    this.neighbours = []
  }

  show(){
    
    // stroke(255);
    // fill(0, 0, 0, 0);
    if(this.alive)
      fill(0,0,0);
    else
      fill(255, 255, 255);

    rect(this.i * w, this.j * w, w, w);

  }


}