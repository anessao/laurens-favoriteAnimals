var app = angular.module("laurensFuzzies", []);

app.controller("laurensAnimalsCtrl", ($scope) => {
	$scope.buttonLabel = "SHOW ME LAUREN'S AMINALS!";
	$scope.animalItemShow = false;

	$scope.showSoul = () => {
		$scope.buttonLabel = "fuzzies????!";
		$scope.animals = [
	        {
	          animal: "frog"
	        },
	        {
	          animal: "kitten"
	        },
	        {
	          animal: "giraffe"
	        }
	      ];

		};
		$scope.animalItemShow = true;

});