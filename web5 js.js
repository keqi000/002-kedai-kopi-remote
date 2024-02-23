// togle active
const NavbarNav = document.querySelector ('.navbar-nav');

//ketika hamburgen menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
	NavbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan navbar-nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
	if(!hamburger.contains(e.target)&& !NavbarNav.contains(e.target)) {
		NavbarNav.classList.remove('active');
	}
});