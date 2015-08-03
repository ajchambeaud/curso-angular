var backendEcommerce = angular.module("backendEcommerce", [
    "backendEcommerce.categorias",
    "backendEcommerce.productos",
    "ui.router"
]);

backendEcommerce.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state("categorias", {
            url : "/categorias",
            templateUrl : "app/categorias/CategoriasTemplate.html",
            controller : "CategoriasController",
            controllerAs : "cat"
        })
        .state("productos", {
            url : "/productos",
            templateUrl : "app/productos/ProductosTemplate.html",
            controller : "ProductosController",
            controllerAs : "prod"
        });
    
    $urlRouterProvider.otherwise("/categorias");
    
});
