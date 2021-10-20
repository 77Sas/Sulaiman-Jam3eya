import React from 'react';
import { useParams } from 'react-router';
import jam3eyatStore from '../stores/jam3eyatStore';

function Details() {
	const urlslug = useParams().slugz;
	const jam3eya = jam3eyatStore.jam3eyat.find((e) => e.slug === urlslug);
	return (
		<div>
			<h1>
				<strong className="yellow">title:</strong>
				{jam3eya.title}
			</h1>
			<img src={jam3eya.image} style={{ height: '300px', width: '300px' }} />
			<p>
				<strong className="yellow">limits:</strong>
				{jam3eya.limit} persons
			</p>
			<p>
				<strong className="yellow">amount:</strong>
				{jam3eya.amount} KD
			</p>
			<p>
				<strong className="yellow">start Date:</strong>
				{jam3eya.startDate}
			</p>
			<p>
				<strong className="yellow">end Date:</strong>
				{jam3eya.endDate}
			</p>
		</div>
	);
}

export default Details;
