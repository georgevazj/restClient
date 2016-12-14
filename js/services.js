'use strict';
angular
	.module('restclient')
	.service('restService', function($http){
		var vm = this;
		var quoteUrl = "http://localhost:3000/quote";

		vm.getQuote = function(){
			console.log('Cargado desde ' + quoteUrl);
			return $http.get(quoteUrl);
		}

		vm.getHash = function(nonce){
			var hashUrl = "http://localhost:3000/hash?nonce=" + nonce;
			console.log('Cargado desde ' + hashUrl);
			return $http.get(hashUrl);
		}

	});