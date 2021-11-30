function on() {
	const menuBar = document.getElementById("menu-bar");
	const overlay = document.getElementById("overlay");

	menuBar.classList.toggle("menuBarStyle");
	overlay.classList.toggle("overlayStyle");
}

function kategoriOn() {
	const kategori = document.getElementById("kategori");

	kategori.classList.toggle("kategoriStyle");
}
