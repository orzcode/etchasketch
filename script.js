let newGridSize;
gridSize(16);
//Run the INITIAL gridsize function (4x4)

function gridSize(sizeSquared){
	const div = document.createElement("div");
for (let i = sizeSquared; i > 0; i--){
	changeGridBlockColor();
	div.classList.add('gridBlock');
	grid.append(div.cloneNode(true));
};
}
//Create a block for the grid,
//Add the class .gridBlock then clone the div & append to the grid, x times based on resize(func)

function removeGridBlocks(){
	document.querySelectorAll(".gridBlock").forEach(item => {
	item.remove();
})}
//Removes all child nodes, used during grid re-sizing


function changeGridBlockColor(){
	document.querySelectorAll(".gridBlock").forEach(item => {
	item.addEventListener('mouseenter', event => {
		item.style.backgroundColor = "lightblue";
	})
})};
changeGridBlockColor();
//Go through and apply colorchange on mouseenter, to each one
//this part is cumbersome due to the 'fake' DOM gridblocks.

//----DEPRECATED - alert asking for grid size - now we use buttons
// function gridSizer(){
// 	newSize = prompt("How many squares per side for new grid?", "Example: 4");
// 	if (newSize){
// 	if (isNaN(newSize) || (newSize < 4) || (newSize > 100)){
// 		alert("Sorry - enter a NUMBER, and keep it between 4 ~ 100");
// 		gridSizer();
// 	   }
// 	else {return newSize};
// 	}
// 	else return	
// };
//----DEPRECATED - alert asking for grid size - now we use buttons

function resize(num){
	// alert("resize is " + num);
	removeGridBlocks();
	newGridSize = num * num;
	gridSize(newGridSize);
	grid.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
	grid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
	document.querySelectorAll(".gridBlock").forEach(item => {
		item.style.height = (100 / num) + "rem";
		item.style.width = (100 / num) + "rem";
	});
}
//Resize function. Uses a variable (newSize) which must be
//invoked (i.e. this func must be invoked) upon clicking button.
//Takes the btn value as param.
//Also runs the gridBlock element remover FIRST.
//the ORDER of this function is vital else grid won't render properly.