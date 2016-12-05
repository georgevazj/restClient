angular.module("restclient")
  .controller("MainController", function($scope,$rootScope, $http){
  	$http.get("http://localhost:3000/quote").
  		then(function(response){
  			console.log('Response ' + JSON.stringify(response));
  			$scope.response = response.data.value;
  		});
  });
