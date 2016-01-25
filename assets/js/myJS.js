var app = angular.module('formApp',[]);
app.controller('formController', ['$scope',function($scope){

	getProductos();

	//Se toman los datos del server a través de 
	//comunicacion por sockets.
	function getProductos(){
		io.socket.get('/productos', function(data){
			$scope.productos = data;
			$scope.$apply();
		});
	}
	
	/*Se detecta algun cambio en la BD sobre cierta entidad 
	especificada y se ejecuta un evento*/
	io.socket.on('productos', function(event){
		if(event.verb == 'created'){
			$scope.productos.push(event.data);
			$scope.$apply();
		}
		else{
			getProductos();
		}
	});
	
}]);