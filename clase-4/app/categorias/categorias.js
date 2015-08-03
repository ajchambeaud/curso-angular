var categorias = angular.module("backendEcommerce.categorias", [
    "ui.router"
]);

categorias.config(function($stateProvider){

    $stateProvider
        .state("categorias.nueva", {
            url : "/nueva",
            templateUrl : "app/categorias/CategoriasFormTemplate.html"
        })
        .state("categorias.editar", {
            url : "/editar/:id",
            templateUrl : "app/categorias/CategoriasFormTemplate.html"
        });
    
})