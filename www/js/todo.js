function getArray() 
{
	var toDoList = new Array;							//Create an Array
	var taskStr = localStorage.getItem('toDoList');		//Get the new Task from Input using LocalStorage
	if(taskStr !== "")								//If the value is NOT empty --null--
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
	localStorage.setItem(taskArray, JSON.stringify(taskArray));	//Store the Task in LocalStorage saving to the Array
	show();
	
	return false;
}

function removeTask()
{
	var id = this.getAttribute;
	var taskArray = getArray();
	taskArray.splice(id, 1);
	
	return false;
}

function show()
{
	var taskArray = getArray();								//Create the variable to hold the Array
	var htmlFormat = "<ul>";								//Add unordered List
	for (var i=0; i< taskArray.length; i++)					//Add For Loop to display the Array
		{
			htmlFormat += "<li>" + taskArray[i] + " <button class='remove' id='" + i + "'>X</button></li>";
		}
	htmlFormat += "</ul>";
	document.getElementById("taskList").innerHTML = htmlFormat;	//Show the document
	
	var buttons = document.getElementsByClassName("remove");
	
	for (var j; j < buttons.length; j++)
		{
			buttons[j].addEventListener("click", removeTask);
		}
}

document.getElementById("add").addEventListener("click", addTask);
show();



