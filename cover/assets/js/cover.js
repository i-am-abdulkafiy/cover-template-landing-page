	const navBarMenu = document.querySelector('.navbar__menu');
	// const closeNavMenu = document.querySelector('.navbar__close')
	const mobileNav = document.querySelector('.navbar__nav');
	
	navBarMenu.addEventListener('click', ()=>
		{
			mobileNav.classList.toggle('show')
		});