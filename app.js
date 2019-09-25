// document.getElementById("testbtn").addEventListener('click', () => {
// 	console.log("click");
// })

function showInfo(mousedOverDiv) {
	console.log("changing");
	let divToShow = mousedOverDiv.children[0];
	divToShow.classList.add("project-info-visible");
}

function hideInfo(mousedOutDiv) {
	console.log("changing back");
	let divTohide = mousedOutDiv.children[0];
	divTohide.classList.remove("project-info-visible");
}
