'use strict';
angular
	.module('restclient')
	.service('restService', function($http){
		var vm = this;

		vm.getQuote = function(){
			var quoteUrl = "http://localhost:3000/quote";
			console.log('Cargado desde ' + quoteUrl);
			return $http.get(quoteUrl);
		}

		vm.getQuoteById = function(id){
			var quoteUrl = "http://localhost:3000/quote/" + id;
			console.log('Cargado desde ' + quoteUrl);
			return $http.get(quoteUrl);
		}

		vm.getHash = function(nonce){
			var hashUrl = "http://localhost:3000/hash?nonce=" + nonce;
			console.log('Cargado desde ' + hashUrl);
			return $http.get(hashUrl);
		}

	});