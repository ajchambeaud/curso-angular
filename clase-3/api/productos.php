<?php

require_once("init.php");

if(isset($_GET["action"])){
    $action = $_GET["action"];
    switch ($action) {
        case "list":
            listProductos();
            break;
        case "list_category":
            listProductosPorCategoria();
            break;        
        case "create":
            createProducto();
            break;
        case "update":
            updateProducto();
            break;
        case "delete":
            deleteProducto();
            break;            
        default:
            sendError("La accion especificada es invalida");
            break;            
    }
}else{
    sendError("No se especifico ninguna acción");
}

function createProducto(){
    $c = getConnection();
    $categoria = (int) $c->real_escape_string(request('categoria_id'));
    $descripcion = $c->real_escape_string(request('producto_desc'));
    $precio = (int) $c->real_escape_string(request('producto_precio'));
    $query = "INSERT INTO productos VALUES (
                DEFAULT,
                $categoria,
                '$descripcion',
                $precio)";
    if($c->query($query)){
        sendResult(array("producto_id" => $c->insert_id), "Producto creado");
    }else{
        sendError("Ocurrio un error al intentar crear el producto: " . $c->error);
    }
}

function updateProducto(){
    $c = getConnection();
    $producto = (int) $c->real_escape_string(request('producto_id'));
    $categoria = (int) $c->real_escape_string(request('categoria_id'));
    $descripcion = $c->real_escape_string(request('producto_desc'));
    $precio = (int) $c->real_escape_string(request('producto_precio'));
    $query = "UPDATE productos SET
                categoria_id = $categoria,
                producto_desc = '$descripcion',
                producto_precio = $precio
              WHERE producto_id = $producto";
    if($c->query($query)){
        sendResult(array("producto_id" => request('producto_id')), "Producto Actualizado");
    }else{
        sendError("Ocurrio un error al intentar actualizar el producto: " . $c->error);
    }
}

function deleteProducto(){
    $c = getConnection();
    $id = (int) $c->real_escape_string(request('producto_id'));
    $query = "DELETE FROM productos
              WHERE producto_id = $id";
    if($c->query($query)){
        sendResult(array(), "Producto Eliminado");
    }else{
        sendError("Ocurrio un error al intentar eliminar el producto");
    }
}

function listProductos(){
    $c = getConnection();
    $query = "SELECT * FROM productos";
    $productos = array();
    if ($resultado = $c->query($query)) {
        while ($fila = $resultado->fetch_assoc()) {
            $productos[] = $fila;
        }
        $resultado->free();
        sendResult(array("productos" => $productos), "Ok");
    }else{
        sendError("No se encontraron resultados");
    }
}

function listProductosPorCategoria(){
    $c = getConnection();
    $id = (int) $c->real_escape_string(request('categoria_id'));
    $query = "SELECT * FROM productos WHERE categoria_id = $id";
    $productos = array();
    if ($resultado = $c->query($query)) {
        while ($fila = $resultado->fetch_assoc()) {
            $productos[] = array_map('utf8_encode', $fila);
        }
        $resultado->free();
        sendResult(array("productos" => $productos), "Ok");
    }else{
        sendError("No se encontraron resultados");
    }
}