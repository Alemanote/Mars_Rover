function myRover() {

//COMMAND VARIABLES
var commandString = document.getElementById("command").value; //VAR for the input!!
var commandArray = []; //Array empty at first
var output = document.getElementById("result");
var csLength = commandString.length; //depending on the number of f,b,l,r on input of the commandString...


//GRID divided by X and Y:
var posX = Math.floor(Math.random() * 100 + 0); //randomizing X axis
var posY = Math.floor(Math.random() * 100 + 0); //randomizing Y axis

//COMPASS & COORDINATES
var compass = Math.floor(Math.random() * 4 + 1); //randomizing direction (1 is N, 2 for S, 3 for E, 4 for W)
var coordinates = posX + "," + posY; //for the output!!!


//CASES DEPENDING ON DIRECTION

switch(compass) {
	case 1: //FACING NORTH (randomized in compass variable before)
		compass = "North"; //1 for N

		//THE OUTPUT on the HTML p element will be:
		output.innerHTML = "FACING: " + compass + "<br />"; //ROVER FACES...
		output.innerHTML += "ROVER'S STARTING AT: " + coordinates + "<br />";

		for (var i=0; i < csLength; i++) { //TWO DIMENSIONAL ARRAY it will keep moving until command ends
		commandArray[i] = commandString[i]; //i is the number of positions i.e. "f,f,f" is "0,1,2"

		//ANOTHER SWITCH FOR f, b, r or l:

		switch(commandArray[i])
			{
			case "f":
			  posY += 1;
			  break;
			case "b":
			  posY -= 1;
			  break;
			case "l":
			  posX -= 1;
			  break;
			case "r":
			  posX += 1;
			  break;
			default:
			  output.innerHTML += "OOPS!! invalid command there.. Remember! f, b, l or r!! " + "<br />" + "<br />";

			}
		output.innerHTML += "ROVER IS NOW AT: " + posX  + "," + posY + "<br />";

		console.log(commandArray); //YOU CAN SEE ON CONSOLE HOW THE 2D ARRAY IS BUILT!!
		console.log(commandString); // FOR EACH commandString you hay a commandArray!!
		}
		break;
	case 2:
		compass = "South"; //The same for SOUTH
		output.innerHTML = "FACING: " + compass + "<br />";
		output.innerHTML += "ROVER'S STARTING AT: " + coordinates + "<br />";

		for (var i=0; i < csLength; i++) { //TWO DIMENSIONAL ARRAY
		commandArray[i] = commandString[i];

		switch(commandArray[i])
			{
			case "f":
			  posY -= 1;
			  break;
			case "b":
			  posY += 1;
			  break;
			case "l":
			  posX += 1;
			  break;
			case "r":
			  posX -= 1;
			  break;
			default:
			  output.innerHTML += "OOPS!! invalid command there.. Remember! f, b, l or r!! " + "<br />";

			}
		output.innerHTML += "ROVER IS NOW AT: " + posX  + "," + posY + "<br />";

		console.log(commandArray);
		console.log(commandString);
		}
		break;
	case 3:
		compass = "East";
		output.innerHTML = "FACING: " + compass + "<br />";
		output.innerHTML += "ROVER'S STARTING AT: " + coordinates + "<br />";

		for (var i=0; i < csLength; i++) {
		commandArray[i] = commandString[i];

		switch(commandArray[i])
			{
			case "f":
			  posX += 1;
			  break;
			case "b":
			  posX -= 1;
			  break;
			case "l":
			  posY += 1;
			  break;
			case "r":
			  posY -= 1;
			  break;
			default:
			  output.innerHTML += "OOPS!! invalid command there.. Remember! f, b, l or r!! " + "<br />";

			}
		output.innerHTML += "ROVER IS NOW AT: " + posX  + "," + posY + "<br />";

		console.log(commandArray);
		console.log(commandString);
		}
		break;
	case 4:
		compass = "West";
		output.innerHTML = "FACING: " + compass + "<br />";
		output.innerHTML += "ROVER'S STARTING AT: " + coordinates + "<br />";

		for (var i=0; i < csLength; i++) {
		commandArray[i] = commandString[i];

		switch(commandArray[i])
			{
			case "f":
			  posX -= 1;
			  break;
			case "b":
			  posX += 1;
			  break;
			case "l":
			  posY -= 1;
			  break;
			case "r":
			  posY += 1;
			  break;
			default:
			  output.innerHTML += "OOPS!! invalid command there.. Remember! f, b, l or r!! " + "<br />";

			}
		output.innerHTML += "ROVER IS NOW AT: " + posX  + "," + posY + "<br />";

		console.log(commandArray);
		console.log(commandString);
		}
		break;
	default:
		compass = "North";
}


//Making a sphere (doesnt work -.-)

	if (posX > 100 ) {
		posX = 0;
	}
else if (posX < 0) {
	posX = 100;
}
	if (posY > 100 ) {
		posY = 0;
	}
	else if (posY < 0) {
		posY = 100;
	}
}
