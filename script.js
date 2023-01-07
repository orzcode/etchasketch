window.onload = () => {
	resize(12)
	document.querySelector("#initialGrid").classList.add("btnToggle");
	btnMngr('colorBtn');
	//Run the INITIAL gridsize function	
}

let brushColor = "var(--grid-hover-color)";
let activeBrush;

colorPicker();


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

	/*Code below runs grid resizing*/
	document.querySelector("#toggleGrid").classList.add("btnToggle");	
	removeAllChildNodes(grid);
	gridSize(num * num);
	grid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
	grid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
	//Takes the resize btn value as param.
	//Also runs the gridBlock element remover FIRST.
	//the ORDER of this function is vital else grid won't render properly.

	//Code below checks active brush and runs btnMnger function
	//add any future brush buttons here, and in button manager function
	switch (activeBrush){
		case "eraser":
			btnMngr('eraser');
			break;
		case "colorBtn":
			btnMngr('colorBtn');
			break;
		case "kekw":
			btnMngr('kekw');
			break;
	}
}



////----Options Buttons Functions-----////
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
//this 'brush()' function is what physically applies the color, however it is
//dependant on colorPicker() to get the color - which gets called at page load

///////////////////////////////////////////////////
function kekw(){
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
/////////////////////////////////////////////////////////////

//////reusable random color generator (var)////////////////
let randColor = () =>  {
	return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
//generates a random HEX color value; (note: function, even though looks like a var)
///////////////////////////////////////////////////////////
function psychoKek(){
	document.querySelectorAll(".gridBlock").forEach(item => {
	// Add a mousedown event listener to the div
	item.addEventListener('mousedown', function() {
		// Change the color of the div to the hover color
		// item.style.backgroundColor = "rgba(50, 70, 80, 0.1)";
		item.style.background = "url('kekw.jpg')";
	  });
  
	  // Add a mouseenter event listener to the div
	  item.addEventListener('mouseenter', function() {
		// Check if the mouse is being clicked
		if (event.buttons === 1) {
		  // Change the color of the div to the hover color
		//   item.style.backgroundColor = "rgba(50, 70, 80, 0.1)";
		  item.style.background = "url('kekw.jpg')";
		}
	  });
  
	  item.addEventListener('dragenter', function() {
		// Change the color of the div to the hover color
		// item.style.backgroundColor = "rgba(50, 70, 80, 0.1)";
		item.style.background = "url('kekw.jpg')";
	  });
})}


/////////central function for setting active button states/////
function btnMngr(brushtype){
	document.querySelector("#colorBtn").classList.remove("btnToggle");
	document.querySelector("#toggleEraser").classList.remove("btnToggle");
	document.querySelector("#kekw").classList.remove("btnToggle");	
	switch (brushtype){
		case "eraser":
			document.querySelector("#toggleEraser").classList.add("btnToggle");
			eraserColor();
			activeBrush = "eraser";
			break;
		case "colorBtn":
			//call this from the colorPicker eventlistener(????)
			document.querySelector("#colorBtn").classList.add("btnToggle");
			brush();
			activeBrush = "colorBtn";
			break;
		case "kekw":
			document.querySelector("#kekw").classList.add("btnToggle");
			kekw();
			activeBrush = "kekw";
			break;
	}
}

