'use strict';
angular
	.module('restclient')
	.service('restService', function($http){
		var url = "http://localhost:3000/quote";

		this.getQuote = function(){
			return $http.get(url);
		}

	});