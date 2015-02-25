var app = angular.module("app");

//Este controller usa la sintaxis tradicional de $scope
app.controller("MainController", function($scope, $window){
    $scope.descripcion = "Descripcion para la directiva";
    $scope.titulo = "Clase 2";
    
    $scope.saludar = function(saludo){
        $window.alert(saludo);
    };
});


//Este controller usa la sintaxis recomendada "Controller as alias" 
app.controller("AlertController", function(){
    this.alertShow = false;
    this.alertType = "info";
    this.alertTitle = "";
    this.alertBody = "";
    
    this.showAlert = function(title, body, type){
        this.alertType = type;
        this.alertTitle = title;
        this.alertBody = body;
        this.alertShow = true;
    }
    
    this.hideAlert = function(){
        this.alertShow = false;
    }
    
    this.testAlert = function(){
        this.showAlert("Warning!",  "Cuidado, algo malo podría haber pasado", "warning");
    }
});