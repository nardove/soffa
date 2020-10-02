import React from 'react';
import './Products.scss';
import svgSprite from '../../assets/images/assets-sprite.svg';

function Products(props) {
	// console.log('[Products.js]', props.data);

	const categories = props.data.map((data) => {
		// console.log('[Products.js]', data);

		const category_icon = data.category.split(' ').join('-').toLowerCase();

		return (
			<div id={category_icon} className='category' key={data.id}>
				<div className='category__heading'>
					<div className={category_icon}>
						<svg className='category__icon category__icon--dark'>
							<use xlinkHref={svgSprite + '#' + category_icon}></use>
						</svg>
					</div>
					<h5 className='heading heading--small dark'>{data.category}</h5>
				</div>

				<div className='goods'>
					{data.stock.map((sofa) => {
						const productDiv = (
							<div className='goods__wrapper' key={sofa.id}>
								<div className='goods__cover'>
									<img
										className='goods__image'
										src={sofa.photo}
										alt={sofa.name}
									/>
									<h3 className='goods__heading heading heading--small light shadow'>
										{sofa.name}
									</h3>
								</div>
							</div>
						);

						return productDiv;
					})}
				</div>
			</div>
		);
	});

	return (
		<section className='products container'>
			<h2 className='heading heading--medium dark'>Hand-crafted</h2>
			<h4 className='sub-heading dark'>made to last</h4>
			{categories}
		</section>
	);
}

export default Products;
