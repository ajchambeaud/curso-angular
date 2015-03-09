<?php

require_once("init.php");

if(isset($_GET["action"])){
    $action = $_GET["action"];
    switch ($action) {
        case "get":
            getCategoria();
            break;
        case "list":
            listCategorias();
            break;
        case "create":
            createCategoria();
            break;
        case "update":
            updateCategoria();
            break;
        case "delete":
            deleteCategoria();
            break;            
        default:
            sendError("La accion especificada es invalida");
            break;            
    }
}else{
    sendError("No se especifico ninguna acción");
}

function createCategoria(){
    $c = getConnection();
    $descripcion = $c->real_escape_string(request('categoria_desc'));
    $query = "INSERT INTO categorias VALUES (
                DEFAULT,
                '$descripcion')";
    if($c->query($query)){
        sendResult(array("categoria_id" => $c->insert_id), "Categoria creada");
    }else{
        sendError("Ocurrio un error al intentar crear la categoria: " . $c->error);
    }
}

function updateCategoria(){
    $c = getConnection();
    $id = (int) $c->real_escape_string(request('categoria_id'));
    $descripcion = $c->real_escape_string(request('categoria_desc'));
    $query = "UPDATE categorias SET
                categoria_desc = '$descripcion'
              WHERE categoria_id = $id";
    if($c->query($query)){
        sendResult(array("categoria_id" => request('categoria_id')), "Categoría Actualizada");
    }else{
        sendError("Ocurrio un error al intentar actualizar la categoría: " . $c->error);
    }
}

function deleteCategoria(){
    $c = getConnection();
    $id = (int) $c->real_escape_string(request('categoria_id'));
    $query = "DELETE FROM categorias
              WHERE categoria_id = $id";
    if($c->query($query)){
        sendResult(array(), "Categoría Eliminada");
    }else{
        sendError("Ocurrio un error al intentar eliminar la categoría");
    }
}

function listCategorias(){
    $c = getConnection();
    $query = "SELECT * FROM categorias";
    $categorias = array();
    if ($resultado = $c->query($query)) {
        while ($fila = $resultado->fetch_assoc()) {
            $categorias[] = $fila;
        }
        $resultado->free();
        sendResult(array("categorias" => $categorias), "Ok");
    }else{
        sendError("No se encontraron resultados");
    }
}

function getCategoria(){
    $c = getConnection();
    $id = (int) $c->real_escape_string(request('categoria_id'));
    $query = "SELECT * FROM categorias WHERE categoria_id=$id";
    if ($resultado = $c->query($query)) {
        $cat = $resultado->fetch_assoc();
        $resultado->free();
        sendResult(array("categoria" => $cat), "Ok");
    }else{
        sendError("No se encontraron resultados");
    }
}
