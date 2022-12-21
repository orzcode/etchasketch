const div = document.createElement("div");
//Create a block for the grid

for (let i = 16; i > 0; i--){
	div.classList.add('gridBlock');
	grid.append(div.cloneNode(true));	
};
//Add the class .gridBlock then clone the div & append to the grid, 16 times

document.querySelectorAll(".gridBlock").forEach(item => {
	item.addEventListener('mouseenter', event => {
		item.style.backgroundColor = "lightblue";
	})
	item.addEventListener('mouseleave', event => {
		item.style.backgroundColor = "rgb(57, 57, 72)";
	})
});
//Go through and apply colorchange on mouseenter, to each one
//this part is cumbersome due to the 'fake' DOM gridblocks.

function gridSizer(){
	let newSize = prompt("How many squares per side for new grid?", "Example: 4");
	if (newSize){
	if (isNaN(newSize) || (newSize < 4) || (newSize > 100)){
		alert("Sorry - enter a NUMBER, and keep it between 4 ~ 100");
		gridSizer();
	   }
	else {return newSize};
	}
	else return	
};
