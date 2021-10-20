import React from 'react';
import { Link } from 'react-router-dom';
import authStore from '../stores/authStore';
import { observer } from 'mobx-react';

function Navbar() {
	return (
		<div className="nav">
			<Link to="/">Home</Link> <n />
			<Link to="/register">Register</Link> <n />
			<Link to="/login">login</Link> <n />
			<Link to="/">{authStore.user ? <button onClick={authStore.logout}>logout</button> : ' '}</Link>
		</div>
	);
}

export default observer(Navbar);
