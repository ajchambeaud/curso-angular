-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 25-02-2015 a las 12:13:37
-- Versión del servidor: 5.5.40-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `curso_angular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_desc` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`categoria_id`, `categoria_desc`) VALUES
(1, 'Celulares y Smartphones'),
(2, 'Cámaras Digitales'),
(3, 'iPad y Tablets'),
(4, 'Notebooks y Accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `producto_id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_id` int(11) NOT NULL,
  `producto_desc` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `producto_precio` int(11) NOT NULL,
  PRIMARY KEY (`producto_id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `categoria_id_2` (`categoria_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_id`, `categoria_id`, `producto_desc`, `producto_precio`) VALUES
(1, 1, 'Celular Mini S4 Generico Android 4 Dual Sim Wifi 2 Cam Libre', 1299),
(2, 1, 'Samsung Galaxy Pocket Gt S5301 * Nuevos * Libres', 1500),
(3, 1, 'Celular Motorola Moto G Xt 1032 8gb Fac A Y B Loc A La Call', 4000),
(4, 1, 'Motorola Moto E Libres Dual Core Android Local Cbtelefonia', 4000),
(5, 1, 'Celular Samsung Galaxy S3 Mini I8200 Reemplaza L8190libre 8g', 3300),
(6, 2, 'Nikon L320 L 320 16.1mp Hd Zoom 26x+ Sd 8gb+ Bolso+ Lector!!', 4200),
(7, 2, 'Samsung Smart Wb250f Wb 250 Touch+ Full Hd+ Wifi+ Zoom 18x!!', 3400),
(8, 3, 'Ipad Mini Apple 16gb Wifi Led 7.9 Camara 5mp Video Hd Nuevo', 4900),
(9, 3, 'Tablet Samsung Galaxy Tab 4 Android T230 Quad Core Ram 1,5gb', 2700),
(10, 4, 'Ultrabook Dell Inspiron 14z Corei7 8gb 500gb Hd7570m Windows', 14000),
(11, 4, 'Notebook Toshiba Corei5 8gb 640gb Hdmi Windows Bt Web Wifi', 13000);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`categoria_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
