<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require 'index.html';
        break;
	case '' :
        require 'index.html';
        break;
    case '/about' :
        require './about.html';
        break;
    case '/projects' :
        require './projects.html';
        break;
	case '/contact' :
        require './contact.html';
        break;
    default:
        require './404.html';
        break;
}

?>
