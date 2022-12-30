gridSize(16);
let brushColor = "var(--grid-hover-color)";
//Run the INITIAL gridsize function (4x4)

function gridSize(sizeSquared){	
	for (let i = sizeSquared; i > 0; i--){
	  const div = document.createElement("div");
	  div.classList.add('gridBlock', 'gridBlockOutline');
  
	  // Add a mousedown event listener to the div
	  div.addEventListener('mousedown', function() {
		// Change the color of the div to the hover color
		div.style.backgroundColor = "var(--grid-hover-color)";
	  });
  
	  // Add a mouseenter event listener to the div
	  div.addEventListener('mouseenter', function() {
		// Check if the mouse is being clicked
		if (event.buttons === 1) {
		  // Change the color of the div to the hover color
		  div.style.backgroundColor = "var(--grid-hover-color)";
		}
	  });
  
	  div.addEventListener('dragenter', function() {
		// Change the color of the div to the hover color
		div.style.backgroundColor = "var(--grid-hover-color)";
	  });
   
	  grid.append(div);
	}
  }
//Create a div cell for the grid,
//Add the class .gridBlock, append to the grid, apply mouseover events
//loops x times based on resize(func)

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//Removes all child nodes, used during grid re-sizing

function resize(num){
	removeAllChildNodes(grid);
	gridSize(num * num);
	grid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
	grid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
	document.querySelectorAll(".gridBlock").forEach(item => {
		item.style.height = (100 / num) + "rem";
		item.style.width = (100 / num) + "rem";
	});
}
//Takes the resize btn value as param.
//Also runs the gridBlock element remover FIRST.
//the ORDER of this function is vital else grid won't render properly.


////----Options Buttons Functions-----////
////// (not part of core program) /////
function toggleGrid(){
	document.querySelectorAll(".gridBlock").forEach(item => {
		item.classList.toggle("gridBlockOutline");
	})
}
//Toggles grid lines - in the form of css outline class toggle

function clearGraffiti(){
	document.querySelectorAll(".gridBlock").forEach(item => {
		item.style.backgroundColor = "var(--grid-base-color)";
	})
}
//resets grid colors to base color

function colorPicker(){
	let colorPicker = document.querySelector("#colorPicker");
	colorPicker.addEventListener("change", function(){
		brushColor = colorPicker.value;
		alert("brush is " + brushColor);
	})
}
colorPicker()