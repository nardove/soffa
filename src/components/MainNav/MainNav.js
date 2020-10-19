/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './MainNav.scss';
import svgSprite from '../../assets/images/assets-sprite.svg';

const MainNav = () => {
	const navListRef = React.useRef();
	const burgerBtnRef = React.useRef();
	const searchBtnRef = React.useRef();
	const searchModalRef = React.useRef();
	const [toggleSearch, setToggleSearch] = React.useState(false);
	const [toggleNav, setToggleNav] = React.useState(false);

	const navItemsConfig = [
		{
			anchor: 'showroom',
			title: 'Show Room',
		},
		{
			anchor: 'designers',
			title: 'Designers',
		},
		{
			anchor: 'about',
			title: 'About',
		},
		{
			anchor: 'contact',
			title: 'Contact',
		},
	];

	const dropdownConfig = [
		{
			anchor: 'armchairs',
			title: 'Armchairs',
		},
		{
			anchor: 'two-seat-sofas',
			title: 'Two Seat Sofas',
		},
		{
			anchor: 'three-seat-sofas',
			title: 'Three Seat Sofas',
		},
	];

	const updateMainNavButtonIcon = (btnRef) => {
		// console.log('[MainNav.js] updateBurgerButtonIcons', btnRef);
		btnRef.current
			.querySelector(`#${btnRef === searchBtnRef ? 'search-icon' : 'burger-icon'}`)
			.classList.toggle('icon-hidden');
		btnRef.current.querySelector('#close-icon').classList.toggle('icon-hidden');
	};

	const searchBtnClickHandler = (e) => {
		// console.log('[MainNav.js] Click Handler', toggleSearch);

		e.preventDefault();
		setToggleSearch(!toggleSearch);

		document.querySelector('.search__input').value = '';

		updateMainNavButtonIcon(searchBtnRef);
		searchModalRef.current.classList.toggle('active');
		burgerBtnRef.current.classList.toggle('hide-btn');
		navListRef.current.classList.toggle('hide-nav');
	};

	const openMobileNavBtnClickHandler = (e) => {
		// console.log('[MainNav.js] openMobileNavBtnClickHandler', toggleNav);

		e.preventDefault();
		setToggleNav(!toggleNav);
		updateMainNavButtonIcon(burgerBtnRef);
		navListRef.current.classList.toggle('active');
		searchBtnRef.current.classList.toggle('hide-btn');
	};

	const handleLinkClick = (e) => {
		// console.log('[MainNav.js] handleLinkClick', e.target);

		// e.preventDefault();
		if (navListRef.current.classList.contains('active')) {
			setToggleNav(!toggleNav);
			updateMainNavButtonIcon(burgerBtnRef);
			navListRef.current.classList.toggle('active');
			searchBtnRef.current.classList.toggle('hide-btn');
		}
	};

	const NavItems = (props) => {
		const { cssClass, config } = props;

		return config.map((item) => {
			const { anchor, title } = item;

			return (
				<li className={cssClass} key={anchor}>
					<a href={`#${anchor}`} className='link light shadow' onClick={handleLinkClick}>
						{title}
					</a>
				</li>
			);
		});
	};

	React.useEffect(() => {
		document.querySelector('body').style.overflow = toggleSearch ? 'hidden' : 'visible';
	}, [toggleSearch]);

	React.useEffect(() => {
		document.querySelector('body').style.overflow = toggleNav ? 'hidden' : 'visible';
	}, [toggleNav]);

	return (
		<div className='main-nav'>
			{/* Search modal panel */}
			<div className='search' ref={searchModalRef}>
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

				{/*	Main nav */}
				<ul className='nav__list' ref={navListRef}>
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
							<NavItems cssClass={'dropdown__item'} config={dropdownConfig} />
						</ul>
					</li>
					<NavItems cssClass={'nav__item'} config={navItemsConfig} />
				</ul>

				{/*	Mobile Nav button */}
				<button
					id='burger-btn'
					className='icon-btn'
					ref={burgerBtnRef}
					onClick={openMobileNavBtnClickHandler}>
					<svg id='burger-icon' className='svg-icon-container svg svg--light'>
						<use xlinkHref={svgSprite + '#nav'}></use>
					</svg>
					<svg id='close-icon' className='svg-icon-container svg svg--light icon-hidden'>
						<use xlinkHref={svgSprite + '#close'}></use>
					</svg>
				</button>
				{/* Search button */}
				<button
					id='search-btn'
					className='icon-btn'
					ref={searchBtnRef}
					onClick={searchBtnClickHandler}>
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
};

export default MainNav;
