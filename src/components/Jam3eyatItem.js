import React from 'react';
import { Link } from 'react-router-dom';

export default function Jam3eyatItem(props) {
	const jam3eya = props.jam3eya;
	return (
		<div class="col-xl-4 col-lg-4 col-md-6">
			<h1>{jam3eya.title}</h1>
			<Link to={`/Details/${jam3eya.slug}`}>
				<img src={jam3eya.image} style={{ height: '300px', width: '300px' }} />{' '}
			</Link>
		</div>
	);
}
