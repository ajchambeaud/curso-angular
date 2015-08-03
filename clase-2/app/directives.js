var tienda = angular.module("tienda");

tienda.directive("selectAllButton", function(){
    return {
        restrict : "E",
        templateUrl : "app/templates/selectAllButton.html",
        scope : {
            lista : "=lista",
            onCheck : "=onCheck"
        }
    };
});

tienda.directive("searchInput", function(){
    return {
        restrict : "E",
        templateUrl : "app/templates/searchInput.html",
        scope : {
            searchModel : "=searchModel"
        }
    };
});