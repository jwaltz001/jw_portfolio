// document.getElementById("testbtn").addEventListener('click', () => {
// 	console.log("click");
// })

function showInfo(mousedOverDiv) {
	console.log("changing");
	let divToShow = mousedOverDiv.children[0];
	divToShow.style.display="flex";
}

function hideInfo(mousedOutDiv) {
	console.log("changing back");
	let divTohide = mousedOutDiv.children[0];
	divTohide.style.display="none";
}
