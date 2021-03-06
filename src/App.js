import React, { Fragment } from 'react';
import data from '../src/assets/api/furniture-data.json';
import MainNav from './components/MainNav/MainNav';
import Carousel from './components/Carousel/Carousel';
import ProductsList from './components/Products/ProductsList';
import ShowRoom from './components/ShowRoom/ShowRoom';
import Designers from './components/Designers/Designers';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
	return (
		<Fragment>
			<Carousel data={data['hero-panel']} />
			<MainNav />
			<ProductsList data={data['products']} />
			<ShowRoom data={data['show-rooms']} />
			<Designers />
			<About />
			<Contact />
			<Footer />
		</Fragment>
	);
};

export default App;
