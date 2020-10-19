import React from 'react';
import svgSprite from '../../assets/images/assets-sprite.svg';
import gsap from 'gsap';

const ProductDetail = (props) => {
	const { id, name, description, photo, dimensions, shipping, colors, price } = props.data;

	const card = React.useRef();

	const openModal = () =>
		gsap.fromTo(card.current, { x: 100 }, { x: 0, duration: 0.3, ease: 'power3.out' });

	const closeModal = () =>
		gsap.to(card.current, {
			x: 100,
			duration: 0.3,
			ease: 'power3.in',
			onComplete: () => props.onCloseProductDetailModal(),
		});

	React.useEffect(() => {
		openModal();
	}, []);

	return (
		<div className='product-detail'>
			<div className='product-detail__card' ref={card}>
				<button className='product-detail__card__close-btn icon-btn' onClick={closeModal}>
					<div className='svg-icon-container'>
						<svg className='svg svg--darkt'>
							<use xlinkHref={svgSprite + '#close'}></use>
						</svg>
					</div>
				</button>

				<div className='product-detail__content'>
					<div className='content__photo'>
						<img className='content__photo__img' src={photo} alt={name} />
					</div>
					<div className='content__details'>
						<h4 className='heading heading--small dark'>{name}</h4>
						<p>{description}</p>
						<div className='content__details__feature'>
							<div className='svg-icon-container'>
								<svg className='svg svg--dark'>
									<use xlinkHref={svgSprite + '#ruler'}></use>
								</svg>
							</div>
							<span>{dimensions}</span>
						</div>
						<div className='content__details__feature'>
							<div className='svg-icon-container'>
								<svg className='svg svg--dark'>
									<use xlinkHref={svgSprite + '#local-shipping'}></use>
								</svg>
							</div>
							<span>{shipping}</span>
						</div>
						<div className='content__details__colors'>
							<p>Select your colour</p>
							<ul className='content__details__color-swatches'>
								{colors.map((color) => {
									return (
										<li
											className='content__details__color-swatch'
											style={{ backgroundColor: color }}></li>
									);
								})}
							</ul>
						</div>
						<div className='content__details__price'>{price}</div>
						<div className='content__details__btn'>
							<button className='btn btn--light light'>Add to basket</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;