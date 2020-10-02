import React from 'react';
import './Designers.scss';

function Designers() {
	return (
		<section id='designers' className='designers'>
			<h2 className='heading heading--medium dark'>Meet The Designers</h2>
			<div className='designers__wrapper'>
				<div className='designer'>
					<img className='designer__image' src='images/designer-1.jpg' alt='designer 1' />
					<div className='designer__wrapper container'>
						<div className='designer__details'>
							<h3 className='heading heading--small light shadow'>Rosa Kelly</h3>
							<p className='description light shadow'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
								odio. Quisque volutpat mattis eros.
							</p>
							<p className='description light shadow'>
								Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non,
								semper suscipit, posuere a, pede. Donec nec justo eget felis
								facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
								dignissim pellentesque felis.
							</p>
						</div>
					</div>
				</div>
				<div className='designer'>
					<img className='designer__image' src='images/designer-2.jpg' alt='designer 2' />
					<div className='designer__wrapper container'>
						<div className='designer__details'>
							<h3 className='heading heading--small light shadow'>Duane Day</h3>
							<p className='description light shadow'>
								Praesent dapibus, neque id cursus faucibus, tortor neque egestas
								auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
								dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
							</p>
							<p className='description light shadow'>
								Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
								consectetuer ligula vulputate sem tristique cursus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Designers;
