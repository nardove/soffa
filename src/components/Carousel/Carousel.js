/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import gsap from 'gsap';
import './Carousel.scss';
// import svgSprite from '../../assets/images/assets-sprite.svg';
import Slide from './Slide';

const Carousel = (props) => {
	// console.log('[Carousel.js]', props.data);

	let autoPlay = 0,
		currentSlide = 0,
		nextSlide = 1,
		isTrasitioning = false,
		isForward = true,
		slideStandbyDuration = 6000,
		track,
		slides,
		indicatorsNav,
		indicators,
		hidden;

	const initCarousel = () => {
		track = document.querySelector('.carousel__track');
		slides = Array.from(track.children);
		indicatorsNav = document.querySelector('.carousel__indicators');
		indicators = Array.from(indicatorsNav.children);

		slides.forEach((slide, index) => {
			slide.style.left = '0px';
			slide.style.zIndex = slides.length - index;
		});

		iniIndicatorsNav();

		initDocumentVisibilityListener();

		startAutoPlay();

		// Stops carousel slide show if it is out of focus
		window.onscroll = () => {
			window.pageYOffset > 400 ? stopAutoPlay() : startAutoPlay();
		};
	};

	const initDocumentVisibilityListener = () => {
		let visibilityChange = '';
		// Checks is the browser tab showing the site is active or hidden
		if (typeof document.hidden !== 'undefined') {
			// Opera 12.10 and Firefox 18 and later support
			hidden = 'hidden';
			visibilityChange = 'visibilitychange';
		} else if (typeof document.msHidden !== 'undefined') {
			hidden = 'msHidden';
			visibilityChange = 'msvisibilitychange';
		} else if (typeof document.webkitHidden !== 'undefined') {
			hidden = 'webkitHidden';
			visibilityChange = 'webkitvisibilitychange';
		}
		document.addEventListener(
			visibilityChange,
			() => {
				document[hidden] ? stopAutoPlay() : startAutoPlay();
			},
			false
		);
	};

	const iniIndicatorsNav = () => {
		indicatorsNav.addEventListener('click', (e) => {
			const targetDot = e.target.closest('button');

			if (!targetDot) return;

			const targetIndex = indicators.findIndex((dot) => dot === targetDot);

			if (!isTrasitioning && targetIndex !== currentSlide) {
				nextSlide = targetIndex;
				isForward =
					currentSlide < nextSlide ||
					(currentSlide === slides.length - 1 && nextSlide === 0)
						? true
						: false;
				moveTrack();
			}
		});

		indicatorsNav.addEventListener('mouseenter', mouseOver);
		indicatorsNav.addEventListener('mouseleave', mouseOut);
	};

	const mouseOver = (e) => {
		// console.log('[Carousel.js] mouseOver');
		!isTrasitioning && stopAutoPlay();
	};

	const mouseOut = (e) => {
		// console.log('[Carousel.js] mouseOut');
		if (!isTrasitioning) {
			startAutoPlay();
			isForward = true;
		}
	};

	const killCarousel = () => {
		stopAutoPlay();

		indicatorsNav.removeEventListener('mouseenter');
		indicatorsNav.removeEventListener('mouseleave');

		// document.removeEventListener(visibilityChange, handleVisibilityChange);
	};

	const moveTrack = () => {
		const slideWidth = slides[currentSlide].getBoundingClientRect().width;
		const duration = 1.5;

		// -------------------------------------------
		// Animate Slides
		gsap.to(slides[currentSlide], {
			x: isForward ? -slideWidth : slideWidth,
			duration: duration,
			ease: 'power1.inOut',
		});

		gsap.fromTo(
			slides[nextSlide],
			{
				x: isForward ? slideWidth : -slideWidth,
			},
			{
				x: 0,
				duration: duration,
				ease: 'power1.inOut',
				onStart: () => {
					isTrasitioning = true;
				},
				onComplete: () => {
					isTrasitioning = false;
				},
			}
		);

		// -------------------------------------------
		// Animate Slide Content
		const currentSlideContent = slides[currentSlide].querySelector('.slide__content');
		const nextSlideContent = slides[nextSlide].querySelector('.slide__content');

		gsap.to(currentSlideContent, {
			opacity: 0,
			duration: 0.5,
		});
		gsap.fromTo(
			nextSlideContent,
			{
				opacity: 0,
				x: isForward ? 80 : -80,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1.75,
				delay: duration - 0.5,
				ease: 'power4.out',
			}
		);

		updateDots();
	};

	const updateDots = () => {
		indicators[currentSlide].classList.remove('current-slide');
		indicators[nextSlide].classList.add('current-slide');

		currentSlide = nextSlide;
		nextSlide++;
		if (nextSlide === slides.length) nextSlide = 0;
	};

	const startAutoPlay = () => {
		clearInterval(autoPlay);
		autoPlay = setInterval(() => {
			moveTrack();
		}, slideStandbyDuration);
		// console.log('[Carousel.js] startAutoPlay()', autoPlay);
	};

	const stopAutoPlay = () => {
		clearInterval(autoPlay);
		autoPlay = 0;
		// console.log('[Carousel.js] stopAutoPlay()', autoPlay);
	};

	const listItems = props.data.map((data) => (
		<Slide key={data.id} data={data} onMouseOver={mouseOver} onMouseOut={mouseOut} />
	));

	const indicatorItems = props.data.map((data, i) => {
		return i === 0 ? (
			<button className='carousel__indicator current-slide' key={'btn' + i}></button>
		) : (
			<button className='carousel__indicator' key={'btn' + i}></button>
		);
	});

	React.useEffect(() => {
		initCarousel();

		return () => {
			killCarousel();
		};
	}, []);

	return (
		<div id='home' className='carousel'>
			<div className='carousel__track-container'>
				<ul className='carousel__track'>{listItems}</ul>
			</div>
			<div className='container'>
				<div className='carousel__indicators'>{indicatorItems}</div>
			</div>
		</div>
	);
};

export default Carousel;
