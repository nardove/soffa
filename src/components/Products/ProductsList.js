import './Products.scss';
import React from 'react';
import Product from './Product';
import ProductDetail from './ProductDetail';

const ProductsList = (props) => {
	// console.log('[ProductsList.js]', props.data);

	const [isProductDetailActive, setIsProductDetailActive] = React.useState(false);
	const [productDetailData, setProductDetailData] = React.useState({});

	const onProductClick = (args) => {
		setIsProductDetailActive(true);
		setProductDetailData(args);
	};

	const onCloseProductDetailModal = () => {
		// console.log('[ProductList.js] onCloseProductDetailModal()');
		setIsProductDetailActive(false);
	};

	React.useEffect(() => {
		document.querySelector('body').style.overflow = isProductDetailActive
			? 'hidden'
			: 'visible';
	}, [isProductDetailActive]);

	return (
		<section className='products container'>
			{isProductDetailActive && (
				<ProductDetail
					data={productDetailData}
					onCloseProductDetailModal={onCloseProductDetailModal}
				/>
			)}
			<h2 className='heading heading--medium dark'>Hand-crafted</h2>
			<h4 className='sub-heading dark'>made to last</h4>
			{props.data.map((data) => (
				<Product data={data} key={data.id} onProductClick={onProductClick} />
			))}
		</section>
	);
};

export default ProductsList;
