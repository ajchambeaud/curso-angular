var tienda = angular.module("tienda");

tienda.controller("MainController", function(){

    this.tiendaLabel = "Tienda";
    this.equipoLabel = "Equipo";
    this.listaTienda = [
        { 
            name : "Cloak of Agility",
            cost : 10
        },
        { 
            name : "Phage",
            cost : 7
        },
        { 
            name : "Pickaxe",
            cost : 8
        }
    ];
    this.listaEquipo = [
        { 
            name : "Archangel's Staff",
            cost : 6
        },
        { 
            name : "Tear of the Goddess",
            cost : 12
        }
    ];
    this.listaTienda.selected = false;
    this.listaEquipo.selected = false;


    this.toggleItem = function(item){
        item.selected = !item.selected;
    };

    this.toggleLista = function(lista){
        lista.forEach(function(item){
            item.selected = !lista.selected;
        });
        lista.selected = !lista.selected;
    };

    this.move = function(origen, destino){
        origen
            .filter(function(item){
                return item.selected;
            })
            .forEach(function(item){
                var index = origen.indexOf(item);
                origen.splice(index, 1);
                destino.push(item);
            });
    };

});