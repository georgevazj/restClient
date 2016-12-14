angular.module("restclient")
  .controller("MainController", mainCtrl);

  function mainCtrl(restService){
  	var vm = this;
    vm.header = "Frase del día"
    vm.button = "Actualizar";
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
