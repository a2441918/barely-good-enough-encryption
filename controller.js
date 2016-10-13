var app = angular.module('bge'); // No square bracket, it will search for an application named bge, if its not there it will create bge automatically


var myControllers = {}; // object



myControllers.controller1 = function($scope) //anonymous function and declaring controller1
{

	$scope.firstAlgorithm = ""; // Empty string
	$scope.secondAlgorithm = "";

	function algorithm1(input) //call function
	{
		var s = ""; // Empty string
		var words = input.split(","); // Return an array and wherever there is a , it will be split up into arrays
		
		for(var i = 0; i< words.length; i++) // 
		{
			var firstWord = words[i].trim().split(" "); // Retruns an array 

			for(var j = 0; j < firstWord.length; j++) // 0->4
			{
				s = s+firstWord[j].charAt(0); // gets the first character of first letter of each word
			}

			s=s+" "; // adding a space so as to go to next element in array
		}
		return s;
	}

	function algorithm2(input)
	{
		var s = "";
		var words = input.split(" "); // , wont be as a separate element
		
		var n = words[0].trim().length; // get the length of first word

		for(var i = 1; i< words.length; i++)
		{
			var str = words[i].trim(); // Trimming every word to remove all spaces 

			if(str.length >= n)
				s=s+str.charAt(n-1); // Letter at position n
			else
				s=s+" "; //Else prints a space
		}
		return s;
	}


	$scope.callAlgorithm = function()
	{
		$scope.firstAlgorithm = "Algorithm 1 : "+algorithm1($scope.text.input); // Goes to view.html
		$scope.secondAlgorithm = "Algorithm 2 : "+algorithm2($scope.text.input);
	}
};


app.controller(myControllers); // Inserting controllers into AngularJS application
