gridSize(16);
//Run the INITIAL gridsize function (4x4)

function gridSize(sizeSquared){	
for (let i = sizeSquared; i > 0; i--){
	const div = document.createElement("div");
	div.classList.add('gridBlock');
	div.addEventListener('mouseenter', function(){
		div.style.backgroundColor = "var(--grid-hover-color)";
	})
	grid.append(div);
	};
}
//Create a div cell for the grid,
//Add the class .gridBlock, append to the grid, apply mouseover event
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
	if (document.querySelector(".gridBlock").style.outline == "1px solid black") {
		document.querySelectorAll(".gridBlock").forEach(item => {
			item.style.outline == "revert";
		})
	}
	else {
		document.querySelectorAll(".gridBlock").forEach(item => {
		item.style.outline == "1px solid black";
		})}};
//Toggles grid lines - in the form of css outline

function clear(){
	//resets grid colors to initial
}