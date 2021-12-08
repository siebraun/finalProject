//define height & width of board
const WIDTH = 4;
const HEIGHT = 4;

//function to add click
function addClick() {
    for (let cell of document.getElementsByClassName('cell')) {
      cell.addEventListener('click', handleClick);
    }
  }
  //add
  addClick();




//handle click
function handleClick() {
    //define clicked element
  let id = event.target.id;

  //log position of clicked element
  console.log(id)

  //define neighbors
  let y = +id[5];
  let x = +id[7];
  //on click, run toggle function
  toggleCells(y, x);
  
}


//function to handle toggle
function toggle(y, x){
    //find the cell at y, x and change it off/on
    if ( (y < 0 || y > HEIGHT - 1) || (x < 0 || x > WIDTH - 1) ) {
      return;
    }
  
    //define id by referencing cell id
      let id = '#cell-' + y + '-' + x;  // '#cell-4-1'
  
      //define cell
      let cell = document.querySelector(id);
  
      //add class "on" to clicked cell
      cell.classList.toggle('on');
  }



function toggleCells(y, x) {
    //toggle top cell
  toggle(y - 1, x);

  //toggle left cell
  toggle(y, x - 1);

  //toggle clicked cell
  toggle(y, x);

  //toggle right cell
  toggle(y, x + 1);

  //toggle bottom cell
  toggle(y + 1, x);
}




