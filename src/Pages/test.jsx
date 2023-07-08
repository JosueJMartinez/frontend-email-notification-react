function ListItem({ text }) {
	return (
		<li className='list-group-item bg-white border-0 ps-0 py-1 d-flex align-items-cente'>
			<img src='/images/icon-list.svg' alt='Icon' className='svg-icon me-3' />
			<span className='pt-4 text-primary'>{text}</span>
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
