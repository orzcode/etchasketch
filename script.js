resize(16);
let brushColor = "var(--grid-hover-color)";
let eraserToggle = false;
colorPicker();
document.querySelector("#toggleGrid").classList.add("btnToggle");
document.querySelector("#initialGrid").classList.add("btnToggle");
//Run the INITIAL gridsize function (4x4)

function gridSize(sizeSquared){	
	for (let i = sizeSquared; i > 0; i--){
	  const div = document.createElement("div");
	  div.classList.add('gridBlock', 'gridBlockOutline');
  	  grid.append(div);

	  // Add a mousedown event listener to the div
	  div.addEventListener('mousedown', function() {
		// Change the color of the div to the hover color
		div.style.backgroundColor = brushColor;
	  });
  
	  // Add a mouseenter event listener to the div
	  div.addEventListener('mouseenter', function() {
		// Check if the mouse is being clicked
		if (event.buttons === 1) {
		  // Change the color of the div to the hover color
		  div.style.backgroundColor = brushColor;
		}
	  });
  
	  div.addEventListener('dragenter', function() {
		// Change the color of the div to the hover color
		div.style.backgroundColor = brushColor;
	  });
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
	/*This removes the outline from all resize btns, then adds to the active/clicked button*/
	document.querySelectorAll(".sizeBtn").forEach(item => {
		item.classList.remove("btnToggle");
	})
	document.activeElement.classList.add("btnToggle");
	/*This removes the outline from all resize btns, then adds to the active/clicked button*/

	/*Code below runs grid resizing*/
	document.querySelector("#toggleGrid").classList.add("btnToggle");
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
	document.activeElement.classList.toggle("btnToggle");
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

function eraser(){
	document.activeElement.classList.toggle("btnToggle");
	switch (eraserToggle) {
		case false:
			eraserColor();
			eraserToggle = true;
			break;
		case true:
			brush();
			eraserToggle = false;
			break;
}}

function colorPicker(){
	let colorPicker = document.querySelector("#colorPicker");
	colorPicker.addEventListener("change", function(){
		brushColor = colorPicker.value;
	})
}


/////////////////////////////////////
//Eraser and Brush Color Toggle Functions
function eraserColor(){
	document.querySelectorAll(".gridBlock").forEach(item => {
		// Add a mousedown event listener to the div
		item.addEventListener('mousedown', function() {
			// Change the color of the div to the hover color
			item.style.backgroundColor = "var(--grid-base-color)";
		  });
	  
		  // Add a mouseenter event listener to the div
		  item.addEventListener('mouseenter', function() {
			// Check if the mouse is being clicked
			if (event.buttons === 1) {
			  // Change the color of the div to the hover color
			  item.style.backgroundColor = "var(--grid-base-color)";
			}
		  });
	  
		  item.addEventListener('dragenter', function() {
			// Change the color of the div to the hover color
			item.style.backgroundColor = "var(--grid-base-color)";
		  });
})
}

function brush(){
	document.querySelectorAll(".gridBlock").forEach(item => {
	// Add a mousedown event listener to the div
	item.addEventListener('mousedown', function() {
		// Change the color of the div to the hover color
		item.style.backgroundColor = brushColor;
	  });
  
	  // Add a mouseenter event listener to the div
	  item.addEventListener('mouseenter', function() {
		// Check if the mouse is being clicked
		if (event.buttons === 1) {
		  // Change the color of the div to the hover color
		  item.style.backgroundColor = brushColor;
		}
	  });
  
	  item.addEventListener('dragenter', function() {
		// Change the color of the div to the hover color
		item.style.backgroundColor = brushColor;
	  });
})}
///////////////////////////////////////////////////