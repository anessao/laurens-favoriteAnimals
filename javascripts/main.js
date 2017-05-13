var app = angular.module("laurensFuzzies", []);

app.controller("laurensAnimalsCtrl", ($scope) => {
	$scope.buttonLabel = "SHOW ME LAUREN'S AMINALS!";
	$scope.animalItemShow = false;

	$scope.showSoul = () => {
		$scope.buttonLabel = "fuzzies????!";
		$scope.animals = [
	        {
	          animal: "http://data.whicdn.com/images/218851089/large.jpg"
	        },
	        {
	          animal: "http://cuteimages.net/data/2015/5/when-the-thought-of-cookies-is-more-photos-cuteimages.net.jpg"
	        },
	        {
	          animal: "https://cookin5m2.files.wordpress.com/2014/12/classical-apple-pie-recipe-cookin5m2-14.jpg"
	        }
	      ];

		};
		$scope.animalItemShow = true;

});