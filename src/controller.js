angular
  .module("restclient")
  .controller("MainController", mainCtrl);

  function mainCtrl(restService){
  	var vm = this;
    vm.headerQuote = "Una frase aleatoria";
    vm.headerQuoteId = "Frase por ID";
    vm.headerHash = "Generar un hash";
    vm.button = "Actualizar";
    vm.nonce = "0000";
    restService.getQuote()
            .then(function(response){
              vm.quote = response.data.value.quote;
            });
  	vm.reload = function(){
  		restService.getQuote()
    				.then(function(response){
              console.log('Respuesta JSON -> ' + JSON.stringify(response));
    					vm.quote = response.data.value.quote;
    				});
  	}

    vm.getQuote = function(){
      restService.getQuoteById(vm.id)
            .then(function(response){
              console.log('Respuesta JSON -> ' + JSON.stringify(response));
              vm.quoteid = response.data.value.quote;
            });
    }

    restService.getHash(vm.nonce)
            .then(function(response){
              console.log('Respuesta HASH -> ' + JSON.stringify(response));
              vm.hash = response.data.hash;
            });
    vm.getHash = function(){
      restService.getHash(vm.nonce)
            .then(function(response){
              console.log('Respuesta HASH -> ' + JSON.stringify(response));
              vm.hash = response.data.hash;
            });

    }
  }