let toggleNavStatus = false;

let toggleNav = function () {
	let getSidebar = document.querySelector(".main-sidebar");
	let getSidebarUl = document.querySelector(".main-sidebar ul");
	let getSidebarTitle = document.querySelector(".main-sidebar span");
	let getSidebarLinks = document.querySelectorAll(".main-sidebar a");

	if (toggleNavStatus === false) {
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "275px";
		getSidebarTitle.style.opacity = "0.5";

		let arraylength = getSidebarLinks.length;
		for (let i = 0; i < arraylength; i++) {
			getSidebarLinks[i].style.opacity = "1";
		}

		toggleNavStatus = true;

	} else if (toggleNavStatus === true) {
		getSidebar.style.width = "60px";
		getSidebarTitle.style.opacity = "0";

		let arraylength = getSidebarLinks.length;
		for (let i = 0; i < arraylength; i++) {
			getSidebarLinks[i].style.opacity = "0";
		}

        getSidebarUl.style.visibility = "hidden";
		toggleNavStatus = false;
	}
}
