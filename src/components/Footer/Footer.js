import React from 'react';
import svgSprite from '../../assets/images/assets-sprite.svg';
import './Footer.scss';

function Footer() {
	function validateAndSubmitForm(e) {
		console.log(e.target, 'validateAndSubmitForm method called');
	}

	return (
		<section id='footer' className='footer'>
			<form className='footer__form'>
				<label className='footer__form__label light' htmlFor='email'>
					Get our latest news and offers
				</label>
				<div className='footer__form__wrapper'>
					<input
						className='footer__form__input'
						name='email'
						type='email'
						placeholder='Subscribe now'
					/>
					<button className='footer__form__btn' onClick={validateAndSubmitForm}>
						<div className='svg-icon-container'>
							<svg className='svg svg--light'>
								<use xlinkHref={svgSprite + '#arrow-forward'}></use>
							</svg>
						</div>
					</button>
				</div>
			</form>

			<div className='footer__social-media light'>
				or follow us on
				<div className='svg-icon-container'>
					<svg className='svg svg--light'>
						<use xlinkHref={svgSprite + '#instagram'}></use>
					</svg>
				</div>
				<div className='svg-icon-container'>
					<svg className='svg svg--light'>
						<use xlinkHref={svgSprite + '#facebook'}></use>
					</svg>
				</div>
				<div className='svg-icon-container'>
					<svg className='svg svg--light'>
						<use xlinkHref={svgSprite + '#twitter'}></use>
					</svg>
				</div>
			</div>

			<div className='footer__copy light'>
				&copy; 2020
				<svg className='footer__logo svg--light'>
					<use xlinkHref={svgSprite + '#logo'}></use>
				</svg>
			</div>
		</section>
	);
}

export default Footer;
