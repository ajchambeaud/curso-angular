var backendEcommerce = angular.module("backendEcommerce");

backendEcommerce.controller("MainController", function(){
    
    this.brand = "Backend Ecommerce";

    this.isActive = function(seccion){
        return this.active == seccion;
    }
    
});