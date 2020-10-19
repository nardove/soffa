import React from 'react';
import svgSprite from '../../assets/images/assets-sprite.svg';

const Product = (props) => {
	// console.log('[Product.js]', props);

	const { category, stock } = props.data;
	const category_icon = category.split(' ').join('-').toLowerCase();

	const onProductClick = (args) => {
		props.onProductClick(args);
	};

	return (
		<React.Fragment>
			<div id={category_icon} className='category'>
				<div className='category__heading'>
					<div className={category_icon}>
						<svg className='category__icon category__icon--dark'>
							<use xlinkHref={svgSprite + '#' + category_icon}></use>
						</svg>
					</div>
					<h5 className='heading heading--small dark'>{category}</h5>
				</div>
				<div className='goods'>
					{stock.map((item) => {
						const { id, name, photo } = item;

						const productDiv = (
							<div className='goods__wrapper' key={id}>
								<div className='goods__cover' onClick={() => onProductClick(item)}>
									<img className='goods__image' src={photo} alt={name} />
									<h3 className='goods__heading heading heading--small light shadow'>
										{name}
									</h3>
								</div>
							</div>
						);
						return productDiv;
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Product;
