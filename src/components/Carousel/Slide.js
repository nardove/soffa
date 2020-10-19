import React from 'react';

const Slide = (props) => {
	// console.log('[Slide.js]', props);

	const { title, description, image_url } = props.data;

	return (
		<li className='carousel__slide'>
			<img className='slide__img' src={`./${image_url}`} alt='Livingroom' />
			<div className='container'>
				<div className='slide__content'>
					<h3 className='heading heading--large light shadow'>{title}</h3>
					<p className='description light shadow'>{description}</p>
					<button
						className='slide__btn btn btn--light light'
						onMouseOver={props.onMouseOver}
						onMouseOut={props.onMouseOut}>
						Read more
					</button>
				</div>
			</div>
		</li>
	);
};

export default Slide;
