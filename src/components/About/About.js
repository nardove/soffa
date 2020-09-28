import React from 'react';
import svgSprite from '../../assets/images/assets-sprite.svg';
import './About.scss';

function About() {
	return (
		<section id='about' className='about container'>
			<h2 className='heading heading--dark heading--medium'>About Us</h2>
			<div className='about__wrapper'>
				<div className='about__image'>
					<svg className='about__image__svg'>
						<use xlinkHref={svgSprite + '#living-room'}></use>
					</svg>
				</div>
				<div className='about__description description'>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
						Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
						urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo
						eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
					</p>
					<p>
						Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare.
						Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
						arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor
						neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
						volutpat.
					</p>
					<p>Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
				</div>
			</div>
		</section>
	);
}

export default About;
