import React from 'react';
// import svgSprite from '../../assets/images/assets-sprite.svg';
import './ShowRoom.scss';

const ShowRoom = (props) => {
	// console.log('[ShowRoom.js]', props.data);

	const showrooms = props.data.map((room) => {
		return (
			<div className='showroom__wrapper' key={room.id}>
				<img className='showroom__image' src={room.photo} alt={room.name} />
				<div
					className='showroom__description'
					style={{ backgroundColor: room['bg-color'] }}>
					<h3 className='heading heading--small light'>{room.name}</h3>
					<p className='description light'>{room.description}</p>
					<button className='btn btn--light light'>Read more</button>
				</div>
			</div>
		);
	});

	return (
		<section id='showroom' className='showroom container'>
			<h2 className='heading heading--medium dark'>Show Room</h2>
			{showrooms}
		</section>
	);
};

export default ShowRoom;
