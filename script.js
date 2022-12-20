const grid = document.getElementById("grid");

const div = document.createElement("div");
div.classList.add('gridBlock');
for (let i = 16; i > 0; i--){
	grid.append(div.cloneNode(true));
	div.addEventListener('mouseenter',(event) => {
		document.querySelector(".gridBlock").style.backgroundColor = "lightblue";
	});
};

