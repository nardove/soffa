/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

/*
Todo:
- Fix search modal when browser is resized
- same for the Carousel
*/

import React from 'react';
import gsap from 'gsap';
import './MainNav.scss';
import svgSprite from '../../assets/images/assets-sprite.svg';

function MainNav() {
	let navList = '';
	let searchModal = '';
	let toggleSearch = false;

	function searchBtnClickHandler(e) {
		// console.log('[MainNav.js] Click Handler', toggleSearch);
		toggleSearch = !toggleSearch;

		const searchIcon = document.querySelector('#search-icon');
		const closeIcon = document.querySelector('#close-icon');

		searchIcon.classList.toggle('icon-hidden');
		closeIcon.classList.toggle('icon-hidden');

		if (toggleSearch) {
			// Disables page from scrolling
			const body = document.querySelector('body');
			body.style.overflow = 'hidden';

			const input = document.querySelector('.search__input');
			input.value = '';

			gsap.to(navList, {
				opacity: 0,
				x: -50,
				duration: 0.25,
				ease: 'power1.out',
				onComplete: () => {
					navList.style.pointerEvents = 'none';
				},
			});

			gsap.fromTo(
				searchModal,
				{
					left: 200,
				},
				{
					left: 0,
					duration: 0.25,
					ease: 'power1.out',
				}
			);
		} else {
			// Enables page from scrolling
			const body = document.querySelector('body');
			body.style.overflow = 'visible';

			gsap.to(navList, {
				opacity: 1,
				x: 0,
				duration: 0.25,
				ease: 'power1.in',
				onComplete: () => {
					navList.style.pointerEvents = 'all';
				},
			});

			const width = searchModal.getBoundingClientRect().width;
			gsap.to(searchModal, {
				left: 100,
				duration: 0.25,
				ease: 'power2.in',
				onComplete: () => {
					searchModal.style.left = width + 'px';
				},
			});
		}
	}

	function openMobileNavBtnClickHandler(e) {
		console.log('[MainNav.js] openMobileNavBtnClickHandler', e.target);
	}

	React.useEffect(() => {
		navList = document.querySelector('.nav__list');
		searchModal = document.querySelector('.search');

		const width = searchModal.getBoundingClientRect().width;
		searchModal.style.left = width + 'px';
	}, []);

	return (
		<div className='main-nav'>
			<div className='search'>
				<div className='container'>
					<div className='search__content'>
						<h3 className='heading light heading--medium'>
							Need help finding what you are looking for?
						</h3>
						<input className='search__input' type='text' placeholder='Search here' />
						<button className='icon-btn'>
							<div className='svg-icon-container--large'>
								<svg className='svg svg--light'>
									<use xlinkHref={svgSprite + '#search'}></use>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>

			<nav className='nav container'>
				<a href='#home' className='nav__home'>
					<svg className='svg svg--light shadow'>
						<use xlinkHref={svgSprite + '#logo'}></use>
					</svg>
				</a>

				<ul className='nav__list'>
					<li className='nav__item'>
						<a href='#armchairs' className='link light'>
							Products
						</a>
						<div className='svg-container dropdown__icon'>
							<svg className='svg-icon-container svg svg--light shadow'>
								<use xlinkHref={svgSprite + '#expand-more'}></use>
							</svg>
						</div>
						<ul className={'dropdown__list'}>
							<li className='dropdown__item'>
								<a href='#armchairs' className='link light shadow'>
									Armchairs
								</a>
							</li>
							<li className='dropdown__item'>
								<a href='#two-seat-sofas' className='link light shadow'>
									Two Seats Sofas
								</a>
							</li>
							<li className='dropdown__item'>
								<a href='#three-seat-sofas' className='link light shadow'>
									Three Seats Sofas
								</a>
							</li>
						</ul>
					</li>
					<li className='nav__item'>
						<a href='#showroom' className='link light shadow'>
							Show room
						</a>
					</li>
					<li className='nav__item'>
						<a href='#designers' className='link light shadow'>
							Designers
						</a>
					</li>
					<li className='nav__item'>
						<a href='#about' className='link light shadow'>
							About
						</a>
					</li>
					<li className='nav__item'>
						<a href='#contact' className='link light shadow'>
							Contact
						</a>
					</li>
				</ul>
				{/* Mobile Nav button */}
				<button id='burger-btn' className='icon-btn' onClick={openMobileNavBtnClickHandler}>
					<svg className='svg-icon-container svg svg--light'>
						<use xlinkHref={svgSprite + '#nav'}></use>
					</svg>
				</button>
				{/* Search button */}
				<button className='icon-btn' onClick={searchBtnClickHandler}>
					<svg id='search-icon' className='svg-icon-container svg svg--light shadow '>
						<use xlinkHref={svgSprite + '#search'}></use>
					</svg>
					<svg id='close-icon' className='svg-icon-container svg svg--light icon-hidden'>
						<use xlinkHref={svgSprite + '#close'}></use>
					</svg>
				</button>
			</nav>
		</div>
	);
}

export default MainNav;
