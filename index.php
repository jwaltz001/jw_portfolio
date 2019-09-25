<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __FILE__ . './index.html';
        break;
	case '/' :
        require __FILE__ . './index.html';
        break;
    case '/about' :
        require __FILE__ . './about.html';
        break;
    case '/projects' :
        require __FILE__ . './projects.html';
        break;
	case '/contact' :
        require __FILE__ . './contact.html';
        break;
    default:
        require __FILE__ . './404.html';
        break;
}

?>
