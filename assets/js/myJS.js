angular.module('formApp',[]);

angular.module('formApp').controller('formController', ['$scope',function($scope){

	getProductos();

	//Se toman los datos del server a través de 
	//comunicacion por sockets.
	function getProductos(){
		io.socket.get('/productos', function(data){
			$scope.productos = data;
			$scope.$apply();
		});
	}
	
}]);