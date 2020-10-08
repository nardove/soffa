import React from 'react';
import './Contact.scss';
import svgSprite from '../../assets/images/assets-sprite.svg';

function Contact() {
	function validateForm(e) {
		e.preventDefault();
		console.log('[Contact.js] validateForm()', e.target);
	}

	return (
		<section id='contact' className='contact container'>
			<div className='contact__wrapper'>
				<div className='contact__form'>
					<h3 className='heading heading--small dark'>How can we help?</h3>
					<p className='description'>
						Please fill in the form below, we will get back to you as soon as possible
					</p>
					<form className='form'>
						<input className='form__input' type='text' placeholder='Name' />
						<input className='form__input' type='email' placeholder='Email' />
						<select className='form__select'>
							<option defaultValue disabled>
								- Select one -
							</option>
							<option>General enquiries</option>
							<option>Order status</option>
							<option>Shipping &amp; Deliveries</option>
							<option>Helps desk</option>
						</select>
						<textarea
							className='form__textarea'
							rows='8'
							cols='50'
							placeholder='Message'></textarea>
						<div className='form__action'>
							<button className='form__submit btn btn--dark' onClick={validateForm}>
								Submit
								<div className='svg-icon-container'>
									<svg className='svg svg--dark'>
										<use xlinkHref={svgSprite + '#arrow-forward'}></use>
									</svg>
								</div>
							</button>
							<button className='form__cancel btn btn--dark' onClick={validateForm}>
								Cancel
								<div className='svg-icon-container'>
									<svg className='svg svg--dark'>
										<use xlinkHref={svgSprite + '#close'}></use>
									</svg>
								</div>
							</button>
						</div>
					</form>
				</div>
				<div className='contact__address'>
					<h3 className='heading heading--small heading--dark'>When &amp; where</h3>
					<div className='location'>
						<p className='location__address'>Fake Address Road</p>
						<p className='location__address'>Town Name</p>
						<p className='location__address'>County</p>
						<p className='location__address'>P00 00C</p>
						<p className='location__address'>+44 (0) 7777 555 555</p>
						<p className='location__address'>
							<a href='mailto:hello@soffa.co.uk' className='link dark'>
								hello@soffa.co.uk
							</a>
						</p>
					</div>
					<div className='times'>
						<table className='times__table description'>
							<tbody>
								<tr>
									<td colSpan='2' className='times__heading'>
										Openning Hours
									</td>
								</tr>
								<tr>
									<td>M</td>
									<td>10a.m. – 6p.m.</td>
								</tr>
								<tr>
									<td>T</td>
									<td>10a.m. – 6p.m.</td>
								</tr>
								<tr>
									<td>W</td>
									<td>10a.m. – 6p.m.</td>
								</tr>
								<tr>
									<td>T</td>
									<td>10a.m. – 6p.m.</td>
								</tr>
								<tr>
									<td>F</td>
									<td>10a.m. – 6p.m.</td>
								</tr>
								<tr>
									<td>S</td>
									<td>11a.m. – 5p.m.</td>
								</tr>
								<tr>
									<td>S</td>
									<td>11a.m. – 5p.m.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
