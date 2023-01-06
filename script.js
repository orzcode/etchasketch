window.onload = () => {
	resize(12)
	//Run the INITIAL gridsize function	
}

let brushColor = "var(--grid-hover-color)";
let eraserToggle = false;
colorPicker();
document.querySelector("#toggleGrid").classList.add("btnToggle");
document.querySelector("#initialGrid").classList.add("btnToggle");


function gridSize(sizeSquared){	
	for (let i = sizeSquared; i > 0; i--){
	  const div = document.createElement("div");
	  div.classList.add('gridBlock', 'gridBlockOutline');
	  div.setAttribute('draggable', 'false');
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
    grid.innerHTML = '';
}
//this used to use a for.each to remove the gridblocks, hence the name
//but now it's much simpler and just destroys the inner HTML

function resize(num){
	/*This removes the outline from all resize btns, then adds to the active/clicked button*/
	document.querySelectorAll(".sizeBtn").forEach(item => {
		item.classList.remove("btnToggle");
	})
	document.activeElement.classList.add("btnToggle");
	/*This removes the outline from all resize btns, then adds to the active/clicked button*/

	////////////////////////////////////////////////////////
	// let gridWH = (grid.clientWidth / 10);
	//no longer used, but kept for reference
	//was used to calculate gridblock size based on grid size

	/*Code below runs grid resizing*/
	document.querySelector("#toggleGrid").classList.add("btnToggle");
	removeAllChildNodes(grid);
	gridSize(num * num);
	grid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
	grid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
	//Takes the resize btn value as param.
	//Also runs the gridBlock element remover FIRST.
	//the ORDER of this function is vital else grid won't render properly.
}



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
		item.style.backgroundImage = "none";
	})
}
//resets grid colors to base canvas color

function eraser(){
	document.activeElement.classList.toggle("btnToggle");
	switch (eraserToggle) {
		case false:
			//case FALSE is when you turn ON the Eraser button
			eraserColor();
			eraserToggle = true;
			break;
		case true:
			//case TRUE is when you turn OFF the Eraser button
			if (kekwFlag == true){
				kekw();
			}else {
			brush();
			}
			eraserToggle = false;
			break;
}}

function colorPicker(){
	let colorPicker = document.querySelector("#colorPicker");
	colorPicker.addEventListener("input", function(){
		brushColor = colorPicker.value;
		brush();
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
			item.style.backgroundImage = "none";
		  });
	  
		  // Add a mouseenter event listener to the div
		  item.addEventListener('mouseenter', function() {
			// Check if the mouse is being clicked
			if (event.buttons === 1) {
			  // Change the color of the div to the hover color
			  item.style.backgroundColor = "var(--grid-base-color)";
			  item.style.backgroundImage = "none";
			}
		  });
	  
		  item.addEventListener('dragenter', function() {
			// Change the color of the div to the hover color
			item.style.backgroundColor = "var(--grid-base-color)";
			item.style.backgroundImage = "none";
		  });
})
}

function brush(){
	document.querySelectorAll(".gridBlock").forEach(item => {
	// Add a mousedown event listener to the div
	item.addEventListener('mousedown', function() {
		// Change the color of the div to the hover color
		item.style.backgroundColor = brushColor;
		item.style.backgroundImage = "none";
	  });
  
	  // Add a mouseenter event listener to the div
	  item.addEventListener('mouseenter', function() {
		// Check if the mouse is being clicked
		if (event.buttons === 1) {
		  // Change the color of the div to the hover color
		  item.style.backgroundColor = brushColor;
		  item.style.backgroundImage = "none";
		}
	  });
  
	  item.addEventListener('dragenter', function() {
		// Change the color of the div to the hover color
		item.style.backgroundColor = brushColor;
		item.style.backgroundImage = "none";
	  });
})}
///////////////////////////////////////////////////
let kekwFlag = false;
function kekw() {
	document.activeElement.classList.toggle("btnToggle");
	//toggles the button outline/border
	
	if (kekwFlag == true){
		brush();
		kekwFlag = false;
	} else {
	kekwFlag = true;
	document.querySelectorAll(".gridBlock").forEach(item => {
		// Add a mousedown event listener to the div
		item.addEventListener('mousedown', function() {
			// Change the color of the div to the hover color
			item.style.backgroundImage = "url('kekw.jpg')";
		  });
	  
		  // Add a mouseenter event listener to the div
		  item.addEventListener('mouseenter', function() {
			// Check if the mouse is being clicked
			if (event.buttons === 1) {
			  // Change the color of the div to the hover color
			 item.style.backgroundImage = "url('kekw.jpg')";
			}
		  });	  
		  item.addEventListener('dragenter', function() {
			// Change the color of the div to the hover color
			item.style.backgroundImage = "url('kekw.jpg')";
		  });
	})};
}