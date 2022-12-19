const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";
for (let i = 16; i > 0; i--){
	container.append(div.cloneNode(true));
};