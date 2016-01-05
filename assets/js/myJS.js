angular.module('formApp',[]).controller('formController',['$scope','$http',
	function($scope,$http){
	
	$scope.compra={
		cantidad:10,
		costo:1
	};

	//Se toman los datos del server a través de 
	//comunicacion por sockets.
	function getProductos(){
		io.socket.get('/productos', function(data){
			$scope.productos = data;
			$scope.$apply();
		});
	}

	getProductos();

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

	/*$http.get('/productos').then(function(response){
		$scope.productos = response.data;
	});*/

	/*$scope.productos=[
		{id:1, nombre:"1kg de Tomate",costo:10},
		{id:2, nombre:"1kg de Lechuga",costo:20},
		{id:3, nombre:"Jabon Palmolive",costo:30},
		{id:4, nombre:"Shampoo",costo:40}];*/
}]);