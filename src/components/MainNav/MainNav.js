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
						<button
							className='search__close-btn nav__btn'
							onClick={searchBtnClickHandler}>
							<svg className='svg__icon svg__icon--small'>
								<use xlinkHref={svgSprite + '#close'}></use>
							</svg>
						</button>

						<h3 className='heading heading--light heading--medium'>
							Need help finding what you are looking for?
						</h3>

						<input className='search__input' type='text' placeholder='Search here' />
						<button className='search__btn'>
							<svg className='svg__icon svg__icon--large'>
								<use xlinkHref={svgSprite + '#search'}></use>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<nav className='nav container'>
				<a href='#home' className=''>
					<svg className='nav__logo'>
						<use xlinkHref={svgSprite + '#logo'}></use>
					</svg>
				</a>

				<ul className='nav__list'>
					<li className='nav__item'>
						<a href='#armchairs' className='link link--light'>
							Products
						</a>
						<svg className='icon icon--light dropdown__icon'>
							<use xlinkHref={svgSprite + '#expand-more'}></use>
						</svg>
						<ul className={'dropdown__list'}>
							<li className='dropdown__item'>
								<a href='#armchairs' className='link link--light'>
									Armchairs
								</a>
							</li>
							<li className='dropdown__item'>
								<a href='#two-seat-sofas' className='link link--light'>
									Two Seats Sofas
								</a>
							</li>
							<li className='dropdown__item'>
								<a href='#three-seat-sofas' className='link link--light'>
									Three Seats Sofas
								</a>
							</li>
						</ul>
					</li>
					<li className='nav__item'>
						<a href='#showroom' className='link link--light'>
							Show room
						</a>
					</li>
					<li className='nav__item'>
						<a href='#designers' className='link link--light'>
							Designers
						</a>
					</li>
					<li className='nav__item'>
						<a href='#about' className='link link--light'>
							About
						</a>
					</li>
					<li className='nav__item'>
						<a href='#contact' className='link link--light'>
							Contact
						</a>
					</li>
					{/* <li className='nav__item'>
					</li> */}
				</ul>
				<button className='nav__btn' onClick={searchBtnClickHandler}>
					<svg className='svg__icon svg__icon--small'>
						<use xlinkHref={svgSprite + '#search'}></use>
					</svg>
				</button>
			</nav>
		</div>
	);
}

export default MainNav;
