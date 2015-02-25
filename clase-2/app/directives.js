var app = angular.module("app");

app.directive("test", function(){
    return {
        restrict : "AE",
        templateUrl : "app/templates/test.html",
        replace : true,
        scope : {
            titulo : '@text',
            descripcion : '=body',
            saludo : '&saludo'
        },
        transclude : true
    }
});

app.directive("alert", function(){
    return {
        restrict : 'E',
        templateUrl : 'app/templates/alert.html',
        scope : {
            type : '=type',
            visible : '=visible',
            title : '=title',
            description : '=description',
            close : '&close'
        }
    };
});
