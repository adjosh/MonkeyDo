function getArray() 
{
	var toDoList = new Array;							//Create an Array
	var taskStr = localStorage.getItem('toDoList');		//Get the new Task from Input using LocalStorage
	if(taskStr !== null)								//If the value is NOT empty --null--
		{
			toDoList = JSON.parse(taskStr);				//Parse data into the Array
		}
	return toDoList;
}

function addTask() 
{
	var task = document.getElementById("taskName").value;	//Create a variable to hold the value of the input
	var taskArray = getArray();								//Create a variable to hold our Array
	taskArray.push(task);									//Push the Task into the Array
	localStorage.setItem('toDoList', JSON.stringify(taskArray));	//Store the Task in LocalStorage saving to the Array
	show();
	document.getElementById("taskName").value="";
	document.getElementById("taskName").focus();
	
	return false;
}

function removeTask()
{
	var id = this.getAttribute;								//Specific ID to select the button
	var taskArray = getArray();								//create Array
	taskArray.splice(id, 1);								//splicing the task we want removed
	//Saving the new/edited array into localStorage
	//show the latest list of Tasks
	
	return false;
}

function show()
{
	var taskArray = getArray();								//Create the variable to hold the Array
	var htmlFormat = "<ul>";								//Add unordered List
	for (var i=0; i< taskArray.length; i++)					//Add For Loop to display the Array
		{
			htmlFormat += "<li>" + taskArray[i] + " <button title='Remove this task' class='remove' id='" + i + "'> x </button></li>";
		}
	htmlFormat += "</ul>";
	document.getElementById("taskList").innerHTML = htmlFormat;	//Show the document
	//Create a button tag using a class and unique id (done in line 42 above)
	var buttons = document.getElementsByClassName("remove");	//Create Array for all the buttons
	
	for (var j; j < buttons.length; j++)
		{
			buttons[j].addEventListener("click", removeTask);	//Add an eventListener for when each button is clicked
		}
}

document.getElementById("add").addEventListener("click", addTask);
show();



