// document.getElementById("testbtn").addEventListener('click', () => {
// 	console.log("click");
// })
document.getElementById("menu-open-btn").addEventListener("click",() => {
	document.getElementById("menu-modal").style.display="block";
})

document.getElementById("menu-close-btn").addEventListener("click", () => {
	document.getElementById("menu-modal").style.display="none";
})

function showInfo(mousedOverDiv) {
	//console.log("changing");
	let divToShow = mousedOverDiv.children[0];
	divToShow.classList.add("visit-site-div-visible");
}

function hideInfo(mousedOutDiv) {
	//console.log("changing back");
	let divTohide = mousedOutDiv.children[0];
	divTohide.classList.remove("visit-site-div-visible");
}
