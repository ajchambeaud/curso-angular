var app = angular.module("app");

app.filter("urlEncode", function($window){
    return function(url){
        return $window.encodeURIComponent(url);
    }
});

app.filter("bolder", function($sce){
    return function(text){
        return $sce.trustAsHtml('<b>'+text+'</b>');
    }
});