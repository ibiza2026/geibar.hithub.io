

let evento = ()=>{
	let footer = document.getElementById("footer");
	if (footer.className==="footer-1") {
		return footer.className = "footer-1 footer-2 footer-3";

	}
	else{
		return footer.className = "footer-1";
	}
}

	document.getElementById("footer").onclick = evento;
	
