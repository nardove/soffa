/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

/*
Todo:
- Fix search modal when browser is resized
- same for the Carousel
*/

import React from 'react';
import './MainNav.scss';
import svgSprite from '../../assets/images/assets-sprite.svg';

function MainNav() {
	let navList = '';
	let burgerBtn = '';
	let searchBtn = '';
	let searchModal = '';
	let toggleSearch = false;
	let toggleNav = false;

	function updateSearchButtonIcon() {
		searchBtn.querySelector('#search-icon').classList.toggle('icon-hidden');
		searchBtn.querySelector('#close-icon').classList.toggle('icon-hidden');
	}

	function updateBurgerButtonIcon() {
		burgerBtn.querySelector('#burger-icon').classList.toggle('icon-hidden');
		burgerBtn.querySelector('#close-icon').classList.toggle('icon-hidden');
	}

	function searchBtnClickHandler(e) {
		// console.log('[MainNav.js] Click Handler', toggleSearch);

		e.preventDefault();
		toggleSearch = !toggleSearch;

		document.querySelector('body').style.overflow = toggleSearch ? 'hidden' : 'visible';
		document.querySelector('.search__input').value = '';

		updateSearchButtonIcon();
		searchModal.classList.toggle('active');
		burgerBtn.classList.toggle('hide-btn');
		navList.classList.toggle('hide-nav');
	}

	function openMobileNavBtnClickHandler(e) {
		// console.log('[MainNav.js] openMobileNavBtnClickHandler', toggleNav);

		e.preventDefault();
		toggleNav = !toggleNav;

		document.querySelector('body').style.overflow = toggleNav ? 'hidden' : 'visible';

		updateBurgerButtonIcon();
		navList.classList.toggle('active');
		searchBtn.classList.toggle('hide-btn');
	}

	function handleLinkClick(e) {
		// console.log('[MainNav.js] handleLinkClick', e.target);

		// e.preventDefault();
		document.querySelector('body').style.overflow = 'visible';
		if (navList.classList.contains('active')) {
			updateBurgerButtonIcon();
			navList.classList.toggle('active');
			searchBtn.classList.toggle('hide-btn');
		}
	}

	React.useEffect(() => {
		burgerBtn = document.querySelector('#burger-btn');
		searchBtn = document.querySelector('#search-btn');
		navList = document.querySelector('.nav__list');
		searchModal = document.querySelector('.search');
	}, []);

	return (
		<div className='main-nav'>
			{/* 
				Search modal panel
			*/}
			<div className='search'>
				<div className='container'>
					<div className='search__content'>
						<h3 className='heading light heading--medium'>
							Need help finding what you are looking for?
						</h3>
						<input
							className='search__input light'
							type='text'
							placeholder='Search here'
							disabled
						/>
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

				{/*
					Main nav
				*/}
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
						{/* Dropdown */}
						<ul className={'dropdown__list'}>
							<li className='dropdown__item'>
								<a
									href='#armchairs'
									className='link light shadow'
									onClick={handleLinkClick}>
									Armchairs
								</a>
							</li>
							<li className='dropdown__item'>
								<a
									href='#two-seat-sofas'
									className='link light shadow'
									onClick={handleLinkClick}>
									Two Seats Sofas
								</a>
							</li>
							<li className='dropdown__item'>
								<a
									href='#three-seat-sofas'
									className='link light shadow'
									onClick={handleLinkClick}>
									Three Seats Sofas
								</a>
							</li>
						</ul>
					</li>
					<li className='nav__item'>
						<a href='#showroom' className='link light shadow' onClick={handleLinkClick}>
							Show room
						</a>
					</li>
					<li className='nav__item'>
						<a
							href='#designers'
							className='link light shadow'
							onClick={handleLinkClick}>
							Designers
						</a>
					</li>
					<li className='nav__item'>
						<a href='#about' className='link light shadow' onClick={handleLinkClick}>
							About
						</a>
					</li>
					<li className='nav__item'>
						<a href='#contact' className='link light shadow' onClick={handleLinkClick}>
							Contact
						</a>
					</li>
				</ul>
				{/*
					Mobile Nav button
				*/}
				<button id='burger-btn' className='icon-btn' onClick={openMobileNavBtnClickHandler}>
					<svg id='burger-icon' className='svg-icon-container svg svg--light'>
						<use xlinkHref={svgSprite + '#nav'}></use>
					</svg>
					<svg id='close-icon' className='svg-icon-container svg svg--light icon-hidden'>
						<use xlinkHref={svgSprite + '#close'}></use>
					</svg>
				</button>
				{/*
					Search button
				*/}
				<button id='search-btn' className='icon-btn' onClick={searchBtnClickHandler}>
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
