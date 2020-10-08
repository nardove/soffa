/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import gsap from 'gsap';
import './Carousel.scss';
import svgSprite from '../../assets/images/assets-sprite.svg';

function Carousel(props) {
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
		hidden,
		visibilityChange;

	function initCarousel() {
		track = document.querySelector('.carousel__track');
		slides = Array.from(track.children);
		indicatorsNav = document.querySelector('.carousel__indicators');
		indicators = Array.from(indicatorsNav.children);

		slides.forEach((slide, index) => {
			slide.style.left = '0px';
			slide.style.zIndex = slides.length - index;
		});

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
		document.addEventListener(visibilityChange, handleVisibilityChange, false);

		startAutoPlay();

		// Stops carousel slide show if it is out of focus
		window.onscroll = () => {
			window.pageYOffset > 400 ? stopAutoPlay() : startAutoPlay();
		};
	}

	function mouseOver(e) {
		!isTrasitioning && stopAutoPlay();
	}
	function mouseOut(e) {
		if (!isTrasitioning) {
			startAutoPlay();
			isForward = true;
		}
	}

	function killCarousel() {
		stopAutoPlay();

		indicatorsNav.removeEventListener('mouseenter');
		indicatorsNav.removeEventListener('mouseleave');
		document.removeEventListener(visibilityChange, handleVisibilityChange);
	}

	function handleVisibilityChange() {
		document[hidden] ? stopAutoPlay() : startAutoPlay();
	}

	function moveTrack() {
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
	}

	function updateDots() {
		indicators[currentSlide].classList.remove('current-slide');
		indicators[nextSlide].classList.add('current-slide');

		currentSlide = nextSlide;
		nextSlide++;
		if (nextSlide === slides.length) nextSlide = 0;
	}

	function startAutoPlay() {
		clearInterval(autoPlay);
		autoPlay = setInterval(() => {
			moveTrack();
		}, slideStandbyDuration);
		// console.log('[Carousel.js] startAutoPlay()', autoPlay);
	}

	function stopAutoPlay() {
		clearInterval(autoPlay);
		autoPlay = 0;
		// console.log('[Carousel.js] stopAutoPlay()', autoPlay);
	}

	React.useEffect(() => {
		initCarousel();

		return () => {
			killCarousel();
		};
	}, []);

	const listItems = props.data.map((data) => {
		return (
			<li className='carousel__slide' key={data.id}>
				<img className='slide__img' src={'./' + data['image-url']} alt='Livingroom' />
				<div className='container'>
					<div className='slide__content'>
						<h3 className='heading heading--large light shadow'>{data.title}</h3>
						<p className='description light shadow'>{data.description}</p>
						<button
							className='slide__btn btn btn--light light'
							onMouseOver={mouseOver}
							onMouseOut={mouseOut}>
							Read more
							<div className='svg-icon-container'>
								<svg className='svg svg--light'>
									<use xlinkHref={svgSprite + '#call-made'}></use>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</li>
		);
	});

	const indicatorItems = props.data.map((data, i) => {
		return i === 0 ? (
			<button className='carousel__indicator current-slide' key={'btn' + i}></button>
		) : (
			<button className='carousel__indicator' key={'btn' + i}></button>
		);
	});

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
}

export default Carousel;
