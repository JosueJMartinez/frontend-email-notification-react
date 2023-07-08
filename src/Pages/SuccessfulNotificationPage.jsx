import React, { useEffect, useState } from 'react';
import { ReactComponent as Icon } from '../assets/icon-list.svg';
import { useLocation } from 'react-router-dom';

export default function SuccessfulNotificationPage() {
	const location = useLocation();
	const { value } = location.state;

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
		<div className='container container-sm d-flex vh-100 align-items-center justify-content-center'>
			{/* <div className='bg-light rounded-5 d-flex align-items-center justify-content-between p-3 w-100'> */}
			<div className='bg-white vh-100 vh-md-auto sm-rounded-5 p-0 p-md-3 d-flex'>
				<div className='d-flex flex-col align-items-center'>
					<div className='card success bg-white border-0 align-items-center p-2 p-md-4'>
						<div className='card-body '>
							{viewportWidth < 768 ? (
								<h2 className='card-title fw-bolder text-primary'>
									<Icon className='icon mb-4' /> <br /> Thanks for <br /> subscribing!
								</h2>
							) : (
								<h1 className='card-title fw-bolder text-primary'>
									<Icon className='icon mb-4' /> <br /> Thanks for <br /> subscribing!
								</h1>
							)}
							<p className='card-text pe-3 text-primary'>
								A confirmation email has been sent to <a href='/'>{value}</a>. Please open it and
								click the button inside to confirm your subscription.
							</p>
							<div className='d-grid gap-2'>
								<button
									className='btn btn-primary my-custom-btn py-3'
									type='button'
									// onClick={handleSubscribeClickEvt}
								>
									Dismiss Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
