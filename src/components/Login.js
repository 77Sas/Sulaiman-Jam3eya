import React from 'react';
import { useState } from 'react';
import authStore from '../stores/authStore';
import { Link } from 'react-router-dom';

function Login() {
	const [ state, setState ] = useState('');

	const handleChange = (event) => {
		const value = event.target.value;
		setState({ ...state, [event.target.name]: value });
	};
	const handleSubmet = (event) => {
		event.preventDefault();
		authStore.logging(state, 'signin');

		console.log(state);
	};
	return (
		<div className="form-Reg">
			<form onSubmit={handleSubmet}>
				<label>
					Username:
					<input type="text" placeholder="Enter your name" name="username" onChange={handleChange} />
				</label>

				<label>
					Password:
					<input type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
				</label>

				<Link to="/">
					<button>Login</button>
				</Link>
			</form>
		</div>
	);
}

export default Login;
