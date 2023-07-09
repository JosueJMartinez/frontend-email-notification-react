import React, { useEffect, useState } from 'react';

import ListItem from '../Components/ListItem';
import Form from '../Components/Form';
import svgMobile from '../assets/illustration-sign-up-mobile.svg';
import svgDesktop from '../assets/illustration-sign-up-desktop.svg';

export default function SubscriptionPage() {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className='container-sm d-flex vh-100 align-items-center justify-content-center'>
			{/* <div className='bg-light rounded-5 d-flex align-items-center justify-content-between p-3 w-100'> */}
			<div className='bg-white vh-100 vh-md-auto sm-rounded-5 p-0 p-md-3 d-flex'>
				<div className='d-flex flex-column flex-md-row align-items-center'>
					<div className='card subscribe order-2 order-md-1 bg-white border-0 align-items-center p-1 p-md-4 mt-4 mt-md-0'>
						<div className='card-body'>
							{viewportWidth < 768 ? (
								<h2 className='card-title fw-bolder text-primary'>Stay updated!</h2>
							) : (
								<h1 className='card-title fw-bolder text-primary'>Stay updated!</h1>
							)}

							<p className='card-text pe-3 text-primary'>
								Join 60,000+ product managers receiving monthly updates on:
							</p>

							{/* <p>Viewport Height: {viewportHeight}px</p> */}
							<ListItem />
							<Form />
						</div>
					</div>
					<div className='image-container  order-1 order-md-2 '>
						<img
							src={viewportWidth < 768 ? svgMobile  :  svgDesktop }
							alt='notification'
							// className='img-fluid'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
