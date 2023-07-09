// import React from 'react';
import svgIcon from '../assets/icon-list.svg';

function ListItem({ text }) {
	return (
		<li className='list-group-item bg-white border-0 ps-0 py-1 d-flex align-items-start'>
			<img src={svgIcon} alt='Icon' className='svg-icon' />
			<span className=' text-primary ps-3'>{text}</span>
		</li>
	);
}

function ListComponent() {
	const items = [
		'Product discovery and building what matters',
		'Measuring to ensure updates are a success',
		'And much more!',
	];

	return (
		<ul className='list-group pb-4'>
			{items.map((item, index) => (
				<ListItem key={index} text={item} />
			))}
		</ul>
	);
}

export default ListComponent;
