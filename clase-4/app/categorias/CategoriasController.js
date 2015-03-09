var categorias = angular.module("backendEcommerce.categorias");

categorias.controller("CategoriasController", ["$window", "$scope", "CategoriaService", "$state", function($window, $scope, CategoriaService, $state){

    $scope.main.active = "cat";
    
    this.categorias = [];
    this.selected = false;
    this.categoria = {};
    this.nueva = {};
    this.formLabel = "Nueva Categoria";
    
    this.loadCategorias = function(){
        var self = this;
        CategoriaService.getCategorias().then(
            function(data){
                self.categorias = data.categorias;
                console.log("loadCategorias OK");
                console.log(data);
            },
            function(errorData){
                $window.alert("ERROR!");
                console.log(errorData);
            }
        );
    };
    
    this.crear = function(categoria){
        var self = this;
        CategoriaService.createCategoria(categoria).then(
            function(data){
                self.nuevaCategoria();
                self.loadCategorias();
            },
            function(errorData){
                $window.alert("ERROR!");
                console.log(errorData);
            }
        );
    };
    
    this.actualizar = function(categoria){
        var self = this;
        CategoriaService.updateCategoria(categoria).then(
            function(data){
                self.nuevaCategoria();
                self.loadCategorias();
            },
            function(errorData){
                $window.alert("ERROR!");
                console.log(errorData);
            }
        );
    };
    
    this.guardar = function(categoria){
        if(typeof categoria.categoria_id != 'undefined'){
            this.actualizar(categoria);
        }else{
            this.crear(categoria);
        }
    };
    
    this.select = function(categoria){
        this.selected = categoria;
    };
    
    this.isSelected = function(categoria){
        return this.selected && this.selected.categoria_id == categoria.categoria_id;
    };
    
    this.nuevaCategoria = function(){
        this.categoria = {};
        this.formLabel = "Nueva Categoria";
        $state.go("categorias.nueva");
    };
    
    this.editarCategoria = function(){
        this.categoria.categoria_id = this.selected.categoria_id;
        this.categoria.categoria_desc = this.selected.categoria_desc;
        this.formLabel = "Editar Categoria";
        $state.go("categorias.editar", {id : this.categoria.categoria_id});
    };
    
    this.eliminarCategoria = function(){
        if($window.confirm("Eliminar categoria " + this.selected.categoria_desc)){
            var self = this;
            CategoriaService.deleteCategoria(this.selected).then(
                function(data){
                    self.selected = false;
                    self.nuevaCategoria();
                    self.loadCategorias();
                },
                function(errorData){
                    $window.alert("ERROR!");
                    console.log(errorData);
                }
            );
        }
    };
    
    this.loadCategorias();
    
    if($state.is("categorias.editar")){
        var self = this;
        var id = $state.params.id;
        CategoriaService.getCategoria({'categoria_id' : id}).then(
            function(data){
                self.selected = data.categoria;
                self.editarCategoria();
            }
        );
    }
    
}]);