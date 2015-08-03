var tienda = angular.module("tienda");

tienda.filter("dolar", function(){
    return function(text){
        return "u$s " + text;
    };
});

tienda.filter("limitar", function(){
    return function(text, charLimit){
        text = text || "";
        if (text.length > charLimit){
            return text.substring(0,charLimit);
        }else{
            return text;
        }
    };
});