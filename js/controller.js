angular.module("restclient")
  .controller("MainController", mainCtrl);

  function mainCtrl(restService){
  	var vm = this;
  	restService.getQuote()
  				.then(function(response){
  					vm.quote = response.data.value.quote;
  				});
	vm.reload = function(){
		restService.getQuote()
  				.then(function(response){
  					vm.quote = response.data.value.quote;
  				});
	}
  }
