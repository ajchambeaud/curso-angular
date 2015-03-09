var productos = angular.module("backendEcommerce.productos");

productos.controller("ProductosController", function($scope, $state){
    
    $scope.main.active = "prod";
    
    this.titulo = "Productos";
    
});