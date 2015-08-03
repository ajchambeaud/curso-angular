var backendEcommerce = angular.module("backendEcommerce");

backendEcommerce.controller("MainController", function(){
    
    this.brand = "Backend Ecommerce";
    this.active = "cat";
    this.isActive = function(seccion){
        return this.active == seccion;
    }
    
});