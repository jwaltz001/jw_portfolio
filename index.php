<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . 'index.html';
        break;
    case '/about' :
        require __DIR__ . 'about.html';
        break;
    case '/projects' :
        require __DIR__ . 'projects.html';
        break;
	case '/contact' :
        require __DIR__ . 'contact.html';
        break;
    default:
        require __DIR__ . '404.html';
        break;
}

?>
