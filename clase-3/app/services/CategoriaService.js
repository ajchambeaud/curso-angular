var backendEcommerce = angular.module("backendEcommerce");

backendEcommerce.service("CategoriaService", function($http){

    var URI_BASE = 'http://localhost/curso-angular/clase-3/api/categorias.php?action=';
    var URI = {
        'LIST' : URI_BASE + 'list',
        'CREATE' : URI_BASE + 'create',
        'UPDATE' : URI_BASE + 'update',
        'DELETE' : URI_BASE + 'delete',
    };
    
    var extractResponse = function(response){
        console.log("-> extractResponse()");
        console.log(response);
        return response.data.data;
    }
    
    this.getCategorias = function(){
        return $http.get(URI.LIST).then(extractResponse);
    };
    
    this.createCategoria = function(dataCategoria){
        return $http.post(URI.CREATE, dataCategoria).then(extractResponse);
    };
    
    this.updateCategoria = function(dataCategoria){
        return $http.post(URI.UPDATE, dataCategoria).then(extractResponse);
    };
    
    this.deleteCategoria = function(dataCategoria){
        return $http.post(URI.DELETE, dataCategoria).then(extractResponse);
    };
    
});