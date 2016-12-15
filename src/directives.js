angular
	.module('restclient')
	.directive('quotePanel', function(){
		return {
			restrict: 'E', // Hace referencia a un elemento/etiqueta
		  	templateUrl: 'templates/quote.html'
		};
	})
	.directive('hashPanel', function(){
		return {
			restrict: 'E', // Hace referencia a un elemento/etiqueta
		  	templateUrl: 'templates/hash.html'
		};
	})