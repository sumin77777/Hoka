$(document).ready(function () {

	// category slider
	$('.center-slider1').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: $('#prev'),
		nextArrow: $('#next'),
		dots: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.new-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: $('#new-prev'),
		nextArrow: $('#new-next'),
		dots: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.top10-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: $('#top10-prev'),
		nextArrow: $('#top10-next'),
		dots: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	ScrollReveal().reveal('.impact-img1', {
		enter: 'bottom',   // 아래에서 위로 올라오기
		distance: '150px',   // 50px 만큼 이동
		duration: 800,     // 1초 동안 애니메이션
		easing: 'ease-in',
		delay: 200,
		opacity: 0,         // 시작할 때 투명도 0
		reset: true        // 한 번만 실행
	});
	ScrollReveal().reveal('.impact-img2', {
		enter: 'bottom',
		distance: '150px',
		duration: 800,
		easing: 'ease-in',
		delay: 200,
		opacity: 0,
		reset: true
	});

	ScrollReveal().reveal('.mountain-2', {
		enter: 'bottom',
		distance: '50px',
		duration: 200,
		easing: 'ease-in-out',
		delay: 0,
		opacity: 0,
		reset: true
	});
	ScrollReveal().reveal('.mountain-1', {
		enter: 'bottom',
		distance: '100px',  
		duration: 800,
		easing: 'ease-in-out',
		delay: 200,
		opacity: 0,
		reset: true
	});
	const toggleBtn = document.querySelector('.mobile-menu-toggle');
	const navbar = document.querySelector('.navbar');

	toggleBtn.addEventListener('click', () => {
		navbar.classList.toggle('active');
	});

	const openSearchBtn = document.querySelector('.open-search','.mobile-open-search');
	const closeSearchBtn = document.querySelector('.close-search');
	const searchModal = document.querySelector('.search-modal');

	openSearchBtn.addEventListener('click', () => {
		searchModal.classList.add('active');
		document.body.classList.add('lock-scroll');
	});

	closeSearchBtn.addEventListener('click', () => {
		searchModal.classList.remove('active');
		document.body.classList.remove('lock-scroll');
	});

	searchModal.addEventListener('click', (e) => {
		if (e.target === searchModal) {
			searchModal.classList.remove('active');
			document.body.classList.remove('lock-scroll');
		}
	});
	document.querySelectorAll('.accordion-btn').forEach(button => {
		button.addEventListener('click', () => {
		  const section = button.parentElement;
		  const content = section.querySelector('.accordion-content');
		  const isActive = section.classList.contains('active');
	  
		  // 모든 섹션 닫기
		  document.querySelectorAll('.footer-section').forEach(sec => {
			sec.classList.remove('active');
			sec.querySelector('.accordion-content').style.maxHeight = null;
		  });
	  
		  // 현재 섹션 열기
		  if (!isActive) {
			section.classList.add('active');
			content.style.maxHeight = content.scrollHeight + 'px';
		  }
		});
	  });
});
