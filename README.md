TODO:
remove drag cursor?

grid responsivity so not reliant on 100rem?
	tip: use (grid.clientWidth / 10) and (grid.clientHeight / 10) in place of '100' inside resize func calculation, BUT, put these as a var outside the function
		^^done, and working.
	tip: CSS width/height of grid, 43vw seems to be good - but doesn't work. Investigate.

Extra Credit
Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.